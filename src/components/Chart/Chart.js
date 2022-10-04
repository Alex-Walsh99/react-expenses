import ChartBar from './ChartBar';
import './Chart.css'
const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues); //spread operator pulls out all values of array and adds them as args to map method

    // return maps all the input data points to a chart bar using the map function.
    return <div className='chart'>
        {props.dataPoints.map((dataPoint) =>
            (<ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            />))}
    </div>
};

export default Chart;