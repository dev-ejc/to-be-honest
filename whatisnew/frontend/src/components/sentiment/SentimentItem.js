import React from "react";

const SentimentItem = ({ sentiment }) => {
  let color = sentiment >= 0.5 ? "success" : sentiment < -0.5 ? "danger" : "secondary"
  return (
  <div className="container justify-content center">
    <h3 className="text-center">
      <i
        className={`far fa-${
          sentiment >= 0.5 ? "smile-beam" : sentiment < -0.5 ? "sad-cry" : "meh"
        } text-${color} fa-lg`}
      />
    </h3>
    <h1 className={`text-center text-${color}`}>
      {sentiment}
    </h1>
  </div>);
};

export default SentimentItem;
