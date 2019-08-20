import React from "react";
import Plot from 'react-plotly.js';

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
          <Plot className="container mx-auto"
    data={[
    {
        x: Object.keys(ts).map(key => new Date(key)),
        y: Object.keys(ts).map(key => ts[key]),
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'Black'},
    }
    ]}
    layout= {{autosize:true}}
    useResizeHandler={true}
/>
      {/* <h3 className="text-center">
        <i
          className={`far fa-${
            sentiment >= 0.5
              ? "smile-beam"
              : sentiment < 0
              ? "sad-cry"
              : "meh"
          } text-${color} fa-7x`}
        /> 
        </h3>*/}
      <h3 className={`text-center`}>
        {"Average Sentiment: "}
        <span className={`text-${color}`}>{sentiment}</span>
      </h3>
    </div>
  );
};

export default Sentiment;
