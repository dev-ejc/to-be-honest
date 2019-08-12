import React from "react";
import Plot from "react-plotly.js";

const Graph = ({ ts, loading }) => {
  if (loading || ts === null) {
    return (
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <Plot
        data={[
          {
            x: Object.keys(ts),
            y: Object.keys(ts).map(key => ts[key]),
            type: "scatter",
            mode: "lines",
            marker: { color: "blue" }
          }
        ]}
        responsive={true}
      />
    );
  }
};

export default Graph;
