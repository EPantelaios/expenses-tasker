import _ from 'lodash';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalSum = _.sum(dataPointsValue);

  const chartBars = props.dataPoints.map((dataPoint, index) => {
    return (
      <ChartBar
        key={index}
        value={dataPoint.value}
        label={dataPoint.label}
        totalSum={totalSum}
      />
    );
  });

  return <div className="chart">{chartBars}</div>;
};

export default Chart;
