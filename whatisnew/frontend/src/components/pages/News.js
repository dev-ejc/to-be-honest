import React, { useContext, useEffect } from 'react'
import NewsList from '../news/NewsList';
import NewsContext from "../../context/news/newsContext";
import Alert from '../alerts/Alert'
import Form from '../news/Form'
import Graph from '../news/Graph'
const News = () => {
    const newsContext = useContext(NewsContext);
    const { news, loading, getNews, topic,ts } = newsContext;
    useEffect(
      () => {
        getNews();
      }, //eslint-disable-next-line
      [topic]
    );
    return (
        <div className="container">
            <Alert />
              {/* <Graph loading={loading} ts={ts}/> */}
              <h1 className="text-center">{topic}</h1>
              <NewsList loading={loading} news={news} />
        </div>
    )
}

export default News
