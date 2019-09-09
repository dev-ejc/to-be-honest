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

sources = ['bbc-news']
            # 'the-washington-post',
            # 'business-insider',
            # 'cnn',
            # 'cnbc',
            # 'fox-news',
            # 'national-geographic',
            # 'politico',
            # 'reuters',
            # 'time',
            # 'bloomberg',
            # 'the-new-york-times',
            # 'the-wall-street-journal']

def pull(topic):
    newsapi = NewsApiClient(api_key=os.getenv("NEWS_KEY",'Token Not Found'))
    result = {"sources":{}}
    for source in sources:
        result["sources"][source] = {}
        time_series = {}
        if topic is '':
            current = newsapi.get_top_headlines(
                                    language="en",
                                    sources=source)
        else:
            current = newsapi.get_everything(
                                        q=topic,
                                        language='en',
                                        sort_by='relevancy',
                                        sources=source)
        for article in current["articles"]:
            if article["content"] is None:
                current["articles"].remove(article)
            else:
                article["publishedAt"] = article["publishedAt"].split("T")[0]
                article["sentiment"] = round(TextBlob(article["content"]).sentiment.polarity,2)
                date = article["publishedAt"]
                if date not in time_series.keys():
                    time_series[date] = article["sentiment"]
                else:
                    time_series[date] += article["sentiment"]
        result["sources"][source]["articles"] = current["articles"]
        result["sources"][source]["ts"] = time_series
    return result

def newsView(request,topic):
    news = pull(topic)
    time_series = {}
    for source in news["sources"].keys():
        print(source)
        for article in news["sources"][source]["articles"]:
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
    news = pull('')
    time_series = {}
    for source in news["sources"].keys():
        for article in news["sources"][source]["articles"]:
            date = article["publishedAt"]
            if date not in time_series.keys():
                try:
                    time_series[date] = article["sentiment"]
                except:
                    continue
            else:
                time_series[date] += article["sentiment"]
    news["ts"] = {}
    for key in sorted(time_series.keys()):
        news["ts"][key] = time_series[key]
    return JsonResponse(news,safe=False)