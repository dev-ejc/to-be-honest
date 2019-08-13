import React from "react";

const Sentiment = ({ ts }) => {
  let sentiment = Number.parseFloat(
    Object.values(ts).reduce((a, b) => {
      return a + b;
    }) / Object.values(ts).length
  ).toFixed(2);
  let color =
    sentiment >= 0.5 ? "success" : sentiment < 0 ? "danger" : "secondary";
  return (
    <div className="container justify-content-center">
      <h3 className="text-center">
        <i
          className={`far fa-${
            sentiment >= 0.5
              ? "smile-beam"
              : sentiment < 0
              ? "sad-cry"
              : "meh"
          } text-${color} fa-7x`}
        />
      </h3>
      <h3 className={`text-center`}>
        {"Sentiment: "}
        <span className={`text-${color}`}>{sentiment}</span>
      </h3>
    </div>
  );
};

export default Sentiment;
