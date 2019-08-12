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

from newsapi import NewsApiClient

def newsView(request,topic):
    newsapi = NewsApiClient(api_key='504dda888b214fb89ee41e2a67a4b8bf')
    top_headlines = newsapi.get_top_headlines(q="Election",
                                          category='business',
                                          language='en',
                                          country='us')
    print(top_headlines)
    return HttpResponse("Nice")