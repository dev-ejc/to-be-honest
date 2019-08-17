import React, { useContext, useEffect, Fragment } from "react";
import NewsList from "../news/NewsList";
import NewsContext from "../../context/news/newsContext";
import Alert from "../alerts/Alert";
import Sentiment from "../sentiment/Sentiment";

const News = () => {
  const newsContext = useContext(NewsContext);
  const { news, loading, getNews, topic, ts } = newsContext;
  useEffect(
    () => {
      getNews('Artificial Intelligence');
    }, //eslint-disable-next-line
    []
  );
  return (
    <div className="card">
      <div className="card-body">
      {loading || ts === null || topic === '' ? (
        <div className="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        </div>
      ) : (
        <div>
          <Alert />
          <h1 className="card-title text-center mx-2">{topic[0].toUpperCase() + topic.slice(1)}</h1>
          <Sentiment ts={ts} />
          <NewsList news={news} />
        </div>
      )}
      </div>
    </div>
  );
};

export default News;
