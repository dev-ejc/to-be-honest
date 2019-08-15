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
    [topic]
  );
  return (
    <div className="card">
      <div className="card-body align-content-center justify-content-center">
      {loading || ts === null ? (
        <div class="spinner-border mx-auto text-center text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <Fragment>
          <Alert />
          <h1 className="card-title text-center mx-2">{topic[0].toUpperCase() + topic.slice(1)}</h1>
          <Sentiment ts={ts} />
          <NewsList news={news} />
        </Fragment>
      )}
      </div>
    </div>
  );
};

export default News;
