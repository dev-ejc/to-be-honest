from django.shortcuts import render
from django.http import JsonResponse
import http
from http import client
from textblob import TextBlob
from textblob.sentiments import NaiveBayesAnalyzer
import datetime
import datetime as dt
import newsapi as na
import os
from newsapi import NewsApiClient

sources = ['bbc-news',
            'the-washington-post',
            'business-insider',
            'cnn',
            'cnbc',
            'fox-news',
            'national-geographic',
            'politico',
            'reuters',
            'time',
            'bloomberg',
            'the-new-york-times',
            'the-wall-street-journal']

def newsView(request,topic):
    def pull():
        result = {"articles":[]}
        for i in range(1,2):
            current = newsapi.get_everything(q=topic,
                                    language='en',
                                          sort_by="relevancy",
                                          page_size=100,
                                          page=i)
            result["articles"] = result["articles"] + current["articles"]
        return result
    newsapi = NewsApiClient(api_key=os.getenv("NEWS_KEY",'Token Not Found'))
    news = pull()
    time_series = {}
    for article in news["articles"]:
        if article["content"] is None:
            news["articles"].remove(article)
        else:
            article["publishedAt"] = article["publishedAt"].split("T")[0]
            article["sentiment"] = round(TextBlob(article["content"]).sentiment.polarity,2)
            date = article["publishedAt"]
            if date not in time_series.keys():
                time_series[date] = article["sentiment"]
            else:
                time_series[date] += article["sentiment"]
    news["ts"] = {}
    for key in sorted(time_series.keys()):
        news["ts"][key] = time_series[key]
    return JsonResponse(news,safe=False)


def headlinesView(request):
    def pull():
        result = {"articles":[]}
        current = newsapi.get_top_headlines(
                                    language='en',
                                    sources=sources)
        result["articles"] = result["articles"] + current["articles"]
        return result
    newsapi = NewsApiClient(api_key=os.getenv("NEWS_KEY",'Token Not Found'))
    news = pull()
    time_series = {}
    for article in news["articles"]:
        if article["content"] is None:
            news["articles"].remove(article)
        else:
            article["publishedAt"] = article["publishedAt"].split("T")[0]
            article["sentiment"] = round(TextBlob(article["content"]).sentiment.polarity,2)
            date = article["publishedAt"]
            if date not in time_series.keys():
                time_series[date] = article["sentiment"]
            else:
                time_series[date] += article["sentiment"]
    news["ts"] = {}
    for key in sorted(time_series.keys()):
        news["ts"][key] = time_series[key]
    return JsonResponse(news,safe=False)