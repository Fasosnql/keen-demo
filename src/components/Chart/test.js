import React from 'react';
import Chart from './index';

import snapshotTest from 'utils/snapshot-test.util';

const chartData = [];
snapshotTest('Chart component renders correctly', (
  <Chart chartData={chartData}/>
));
