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
      getNews();
    }, //eslint-disable-next-line
    [topic]
  );
  return (
    <div className="container justifiy-content-center align-content-center">
      {loading || ts === null ? (
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : (
        <Fragment>
          <Alert />
          <h1 className="text-center">{topic}</h1>
          <Sentiment ts={ts} />
          <NewsList news={news} />
        </Fragment>
      )}
    </div>
  );
};

export default News;
