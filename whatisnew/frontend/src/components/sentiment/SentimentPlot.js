import React from 'react'
// Pond
import { TimeSeries, TimeEvent } from "pondjs";
import { Charts, ChartContainer, ChartRow,YAxis,LineChart} from 'react-timeseries-charts'


const SentimentPlot = ({ts}) => {
    const events = Object.keys(ts).map(key => {
        new TimeEvent(new Date(key),{value:ts[key]})
    })
    const series = new TimeSeries({
        name:"Avg sentiment",
        events
    })

    return (
        <ChartContainer timeRange={series.range()} >
        <ChartRow height="200">
          <YAxis id="y" label="Sentiment" min={-1.0} max={1.0} />
          <Charts>
            <LineChart
              axis="y"
              breakLine={false}
              series={series}
              style={style}
              interpolation="curveBasis" />
          </Charts>
        </ChartRow>
      </ChartContainer>
    )
}

const style = {
    in: {
        normal: {stroke: "steelblue", fill: "none", strokeWidth: 1},
        highlighted: {stroke: "#5a98cb", fill: "none", strokeWidth: 1},
        selected: {stroke: "steelblue", fill: "none", strokeWidth: 1},
        muted: {stroke: "steelblue", fill: "none", opacity: 0.4, strokeWidth: 1}
    }
};

export default SentimentPlot
