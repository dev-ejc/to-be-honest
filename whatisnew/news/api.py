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

def newsView(request):
    # newsapi = NewsApiClient(api_key=process.env.NEWS_KEY)
    # print(topic)
    # top_headlines = newsapi.get_top_headlines(q="Election",
    #                                       sources='bbc-news,the-verge',
    #                                       category='business',
    #                                       language='en',
    #                                       country='us')
    return HttpResponse("nice")