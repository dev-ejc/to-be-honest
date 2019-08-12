from django.shortcuts import render

##from .serializers import NewsSerializer
from django.http import HttpResponse
import http
from http import client
import textblob
from textblob import TextBlob
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
    print(top_headlines.articles[0])
    return HttpResponse("Nice")