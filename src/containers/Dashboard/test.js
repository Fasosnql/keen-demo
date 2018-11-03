import React from 'react';
import Dashboard from './index';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('Dashboard component renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});