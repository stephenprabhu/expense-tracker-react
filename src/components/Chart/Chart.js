import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    console.log(props.dataPoints);
    const amountList = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...amountList);
    return (
        <div className="chart">
            { props.dataPoints.map((dataPoint) => (
                    <ChartBar 
                        key={dataPoint.label}
                        value={dataPoint.value} 
                        max={totalMax} 
                        label={dataPoint.label} 
                        />
            ))}
        </div>
    );
}

export default Chart;
