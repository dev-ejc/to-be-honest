import React from 'react'
import Plot from 'react-plotly.js'
const Graph = ({ts}) => {
    return (
        <Plot
        data={[
          {
            x: Object.keys(ts),
            y: Object.keys(ts).map(key => ts[key]),
            type: 'scatter',
            mode:'lines',
            marker: {color: 'blue'},
          }
        ]}
        responsive={true}/>
    )
}

export default Graph
