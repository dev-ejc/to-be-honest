import React, { useContext, useEffect, useState } from "react";
import NewsItem from "../news/NewsItem";
import NewsContext from "../../context/news/newsContext";
import Alert from "../alerts/Alert";
import Sentiment from "../sentiment/Sentiment";

const News = () => {
  const newsContext = useContext(NewsContext);
  const { news, loading, getHeadlines, topic, ts } = newsContext;
  const [state,setState] = useState(0)

  useEffect(
    () => {
      getHeadlines();
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
    <div className="container text-center">
          <Alert />
          <h3 className="text-center mx-2">{topic[0].toUpperCase() + topic.slice(1)}</h3>
          <Sentiment ts={ts} />
          <div className="container">
            <button onClick={prev} align="center" className="btn btn-primary m-3">{"<"}</button>
            <h7><span className="text-dark">{state}</span></h7>
            <button onClick={next} align="center" className="btn btn-primary m-3">{">"}</button> 
            </div>
          <NewsItem n={current} />
        </div>
    );
  }
};

export default News;
