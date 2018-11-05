import React from 'react';
import PageLayout from './index';
import { MemoryRouter } from 'react-router-dom';

import snapshotTest from 'utils/snapshot-test.util';

snapshotTest('Page Layout component renders correctly', (
  <MemoryRouter>
    <PageLayout />
  </MemoryRouter>
));