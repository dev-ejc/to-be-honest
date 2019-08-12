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
            tb = TextBlob(article["content"])
            polarity = tb.sentiment.polarity
            article["sentiment"] = polarity
            date = article["publishedAt"].split("T")[0]
            if date not in time_series.keys():
                time_series[date] = polarity
            else:
                time_series[date] += polarity
    news["ts"] = time_series
    return JsonResponse(news,safe=False)