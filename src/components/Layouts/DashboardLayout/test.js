import React from 'react';
import DashboardLayout from './index';

import snapshotTest from 'utils/snapshot-test.util';

const pageViewsMock = [];
snapshotTest('Dashboard Layout renders correctly', (
  <DashboardLayout pageViews={pageViewsMock} />
));