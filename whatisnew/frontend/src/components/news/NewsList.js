import React from "react";
import NewsItem from './NewsItem'
const NewsList = ({ news,loading }) => {
  if (loading || news === null) {
    return (
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container">
        {news.map(n => (
          <NewsItem n={n} />
        ))}
      </div>
    );
  }
};

export default NewsList;
