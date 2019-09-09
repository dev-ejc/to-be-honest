import React from "react";
import SentimentPlot from './SentimentPlot'

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
      {/* <SentimentPlot ts={ts} /> */}
      <h5 className="text-center">
        <i
          className={`far fa-${
            sentiment >= 0.5
              ? "smile-beam"
              : sentiment < 0
              ? "sad-cry"
              : "meh"
          } text-${color} fa-3x`}
        /> 
        </h5>
      <h5 className={`text-center`}>
        {"Average Sentiment: "}
        <span className={`text-${color}`}>{sentiment}</span>
      </h5>
    </div>
  );
};

export default Sentiment;
