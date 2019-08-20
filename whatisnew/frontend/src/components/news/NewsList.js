import React, { useState } from "react";
import NewsItem from './NewsItem'
const NewsList = ({ news }) => {
  const [state,setState] = useState(0)
  const current = news[state]
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
    return (
      <div className="card text-center">
          <NewsItem n={current}/>
      </div>
    );
};

export default NewsList;
