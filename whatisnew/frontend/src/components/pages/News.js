import React, { useContext, useEffect } from 'react'
import NewsList from '../news/NewsList';
import NewsContext from "../../context/news/newsContext";
import Alert from '../alerts/Alert'
import Form from '../news/Form'
import Graph from '../news/Graph'
const News = () => {
    const newsContext = useContext(NewsContext);
    const { news, loading, getNews, topic } = newsContext;
    useEffect(
      () => {
        getNews();
      }, //eslint-disable-next-line
      [topic]
    );
    if (loading || news === null) {
        return (
          <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        );
      } else {
    return (
        <div className="container">
          <Alert />
            <Form />
            <h1>{topic}</h1>
            {/* <Graph /> */}
            <NewsList news={news} />
        </div>
    )
      }
}

export default News
