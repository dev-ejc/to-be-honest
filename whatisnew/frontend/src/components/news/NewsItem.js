import React from "react";
import SentimentItem from "../sentiment/SentimentItem";

const NewsItem = ({ n }) => {
  return (
    <div className="card">
        <h5 class="card-title text-center mb-1">{n.title.split("-")[0]}</h5>
      <div className="card-body container">
        <SentimentItem sentiment={n.sentiment}/>
        <table className="table">
          <tbody>
            <tr>
              <td>Source</td>
              <td>{n.source.name}</td>
            </tr>
            <tr>
              <td>Author</td>
              <td>{n.author}</td>
            </tr>
            <tr>
              <td>Publish Date</td>
              <td>{n.publishedAt}</td>
            </tr>
          </tbody>
        </table>
        <a href={n.url} className="btn btn-primary form-control">Link</a>
      </div>
    </div>
  );
};

export default NewsItem;
