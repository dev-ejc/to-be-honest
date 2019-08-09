import React, { useEffect, useContext } from "react";
import NewsContext from "../../context/news/newsContext";

const News = () => {
  const newsContext = useContext(NewsContext);
  const { news, loading, getNews } = newsContext;
  useEffect(
    () => {
      getNews();
      console.log(news);
    }, //eslint-disable-next-line
    []
  );
  // return (
  //     <div>
  //     <h1>Test</h1>
  //     </div>
  // )
  if (loading || news === null) {
    return (
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="card-columns container">
          {news.map(n => (
              <div className="card">
                <img
                  src={n.urlToImage}
                  className="card-img-top"
                  alt="headline"
                />
                <div className="card-body">
                  <h5 className="card-title">{n.title.split('-')[0]}</h5>
                  <br></br>
                  <h7 className="card-text">{n.author}</h7>
                  <br></br>
                  <h9 className="card-text">{n.source.name}</h9>
                  <br></br>
                  <p className="card-text">{n.description}</p>
                  <a href="/" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
          ))}
        </div>
    );
 }
};

export default News;
