import React from "react";

const NewsItem = ({ n }) => {
  return (
    <div className="card">
      <div className="card-body container">
      <h3 class="card-title text-center mb-1">{n.title.split("-")[0]}</h3>
      <h5 className="card-text text-center">{"Sentiment: "}<span class="badge badge-primary badge">{n.sentiment}</span></h5>
            <div className="list-group">
              <li className="list-group-item">
                <h7 className="card-text mb-1">{n.source.name}</h7>
              </li>
              <li className="list-group-item">
                <h7 className="card-text mb-1">{n.author}</h7>
              </li>
              <li className="list-group-item">
                <small>{n.publishedAt}</small>
              </li>
            </div>
          </div>
        </div>
  );
};

export default NewsItem;
