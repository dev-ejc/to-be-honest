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
    top_headlines = newsapi.get_top_headlines(q=topic,
                                          category='business',
                                          language='en',
                                          country='us')
    for article in top_headlines["articles"]:
        if article["content"] is None:
            top_headlines["articles"].remove(article)
        else:
            tb = TextBlob(article["content"])
            polarity = tb.sentiment.polarity
            article["sentiment"] = polarity
    return JsonResponse(top_headlines["articles"],safe=False)