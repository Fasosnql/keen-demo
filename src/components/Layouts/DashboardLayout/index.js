import React from 'react';

import Chart from 'components/Chart';
import {
  DataTextWrapper,
  DataChartWrapper,
  HeaderLine,
} from './styles';

const DashboardLayout = ({ pageViews }) => (
  <div>
    <DataTextWrapper>
      <HeaderLine>PAGE VIEWS:</HeaderLine>
      {pageViews.map((item) => (
        <div key={item.item}>
          {item.item}: {item.result}
        </div>
      ))}
    </DataTextWrapper>
    <DataChartWrapper>
      <Chart chartData={pageViews} />
    </DataChartWrapper>
  </div>
);

export default DashboardLayout;