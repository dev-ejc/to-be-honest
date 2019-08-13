import React from "react";
import NewsItem from './NewsItem'
const NewsList = ({ news }) => {
    return (
      <div className="container">
        {news.map(n => (
          <NewsItem n={n} />
        ))}
      </div>
    );
};

export default NewsList;
