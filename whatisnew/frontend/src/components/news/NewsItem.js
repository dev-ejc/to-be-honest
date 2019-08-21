import React from "react";

const NewsItem = ({ n }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
      <a href={n.url}><img src={n.urlToImage} className="card-image rounded img-fluid" alt="Responsive"/></a>
      <h5 class="card-title text-center my-2">{n.title}</h5>
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
      </div>
      </div>
  );
};

export default NewsItem;
