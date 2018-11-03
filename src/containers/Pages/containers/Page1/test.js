import React from 'react';
import Page1 from './index';
import renderer from 'react-test-renderer';

it('page1 component renders correctly', () => {
  const tree = renderer
    .create(<Page1 />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});