import React from 'react';
import PageLayout from './index';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('Page Layout component renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <PageLayout />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});