import React from 'react';
import Pages from './index';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

it('Pages component renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Pages />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});