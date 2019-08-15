import React from "react";
import SentimentItem from "../sentiment/SentimentItem";

const NewsItem = ({ n }) => {
  return (
    <div className="card">
      <div className="card-body container">
      <h5 class="card-title text-center mb-1">{n.title}</h5>
        {/* <SentimentItem sentiment={n.sentiment}/> */}
        <table className="table table-responsive-sm">
          <tbody>
          <tr>
              <td>Sentiment</td>
              <td>{n.sentiment}</td>
            </tr>
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
        <a href={n.url} className="btn btn-primary form-control">Article</a>
      </div>
    </div>
  );
};

export default NewsItem;
