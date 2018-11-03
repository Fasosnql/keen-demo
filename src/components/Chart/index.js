import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-d3-components'

import {
  ChartWrapper,
} from './styles';

const getChartData = (rawData = []) => {
  let returnData = {
    label: 'Page Views',
    values: []
  };

  if (rawData.length) {
    for(let i = 0; i < rawData.length; i++) {
      const el = rawData[i];
      returnData.values.push({
        x: el.item,
        y: el.result,
      });
    }
  }

  return returnData;
};

const Chart = ({ chartData, width, height, margin }) => {
  const mappedChartData = getChartData(chartData);
  return (
    <div>
      {mappedChartData.values.length ? (
        <ChartWrapper>
          <BarChart data={mappedChartData}
                    width={width}
                    height={height}
                    margin={margin} />
        </ChartWrapper>
      ) : null}
    </div>
  )
};

Chart.propTypes = {
  chartData: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};

Chart.defaultProps = {
  width: 400,
  height: 400,
  margin: {
    top: 10,
    bottom: 50,
    left: 50,
    right: 10
  },
};

export default Chart;