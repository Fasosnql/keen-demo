import React from 'react';
import PageLayout from './index';
import { MemoryRouter } from 'react-router-dom';

import snapshotTest from 'utils/snapshot-test.util';

const children = (<div>test children</div>);
snapshotTest('Page Layout component renders correctly', (
  <MemoryRouter>
    <PageLayout children={children} />
  </MemoryRouter>
));