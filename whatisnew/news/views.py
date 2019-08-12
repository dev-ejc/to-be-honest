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

def newsView(request,topic):
    newsapi = NewsApiClient(api_key=os.getenv("NEWS_KEY",'Token Not Found'))
    news = newsapi.get_everything(q=topic,
                                    language='en',
                                          sort_by="relevancy",
                                          page_size=10)
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
    news["ts"] = time_series
    return JsonResponse(news,safe=False)