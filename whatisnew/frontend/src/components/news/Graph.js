import React from "react";

const Graph = ({ ts, loading }) => {
    if (loading || ts === null) {
      return (
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    } else {
      let sentiment = Number.parseFloat(Object.values(ts).reduce((a,b) => {return a + b}) / Object.values(ts).length).toFixed(2)
      console.log(sentiment)
      return (
        <div className="containter justify-content center">
        <h1 className="text-center"><i className={
          sentiment >= 0.5 ? "far fa-smile-beam" : sentiment < -0.5 ? "far fa-sad-cry" : "far fa-meh"}></i></h1>
        <h1 className="text-center">{sentiment}</h1>
        </div>
        )
    }
}

export default Graph;
