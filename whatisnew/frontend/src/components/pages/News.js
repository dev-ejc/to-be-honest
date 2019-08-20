import React, { useContext, useEffect, useState } from "react";
import NewsItem from "../news/NewsItem";
import NewsContext from "../../context/news/newsContext";
import Alert from "../alerts/Alert";
import Sentiment from "../sentiment/Sentiment";

const News = () => {
  const newsContext = useContext(NewsContext);
  const { news, loading, getNews, topic, ts } = newsContext;
  const [state,setState] = useState(0)

  useEffect(
    () => {
      getNews('Artificial Intelligence');
    }, //eslint-disable-next-line
    []
  );

  if(loading || news.length === 0 ) {
    return (    <div className="d-flex justify-content-center">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div>)
  } else {
  const next = () => {
    if(state === news.length-1) {
      setState(0)
    } else {
      setState(state + 1)
    }
  }

  const prev = () => {
    if(state === 0) {
      setState(news.length-1)
    } else {
      setState(state - 1)
    }
  }
  const current = news[state]
  return (
    <div className="card">
      <div className="card-body">
        <div>
          <Alert />
          <h1 className="card-title text-center mx-2">{topic[0].toUpperCase() + topic.slice(1)}</h1>
          <Sentiment ts={ts} />
          <div className="container">
            <button onClick={prev}className="btn btn-primary">{"<"}</button>
            <button onClick={next} className="btn btn-primary">{">"}</button> 
            </div>
          <NewsItem n={current} />
        </div>
      </div>
    </div>
  );
  }
};

export default News;
