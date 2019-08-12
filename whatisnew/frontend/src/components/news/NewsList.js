import React from "react";

const NewsList = ({news}) => {
    return (
      <div className="container">
          {news.map(n => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{n.title.split('-')[0]}</h5>
                  <h7 className="card-text">{n.author}</h7>
                  <h9 className="card-text">{n.source.name}</h9>
                  <h9 className="card-text">{n.publishedAt}</h9>
                  <h9 className="card-text">{n.sentiment}</h9>
                </div>
              </div>
          ))}
        </div>
    );
};

export default NewsList;
