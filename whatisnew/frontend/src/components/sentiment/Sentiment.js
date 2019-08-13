import React from "react";

const Sentiment = ({ ts }) => {
  let sentiment = Number.parseFloat(
    Object.values(ts).reduce((a, b) => {
      return a + b;
    }) / Object.values(ts).length
  ).toFixed(2);
  return (
    <div className="container justify-content center">
      <h1 className="text-center">
        <i
          className={`far fa-${sentiment >= 0.5
            ? "smile-beam"
            : sentiment < -0.5
            ? "sad-cry"
            : "meh"} fa-xl`
          }
        />
      </h1>
      <h1 className={`text-center ${sentiment >= 0.5
            ? "text-success"
            : sentiment < -0.5
            ? "text-danger"
            : "text-secondary"}`
          } >{sentiment}</h1>
    </div>
  );
};

export default Sentiment;
