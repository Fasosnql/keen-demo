import React from 'react';
import Page1Layout from './index';

import snapshotTest from 'utils/snapshot-test.util';

snapshotTest('Page1 Layout renders correctly', (
  <Page1Layout/>
));