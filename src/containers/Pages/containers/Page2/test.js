import React from 'react';
import Page2 from './index';
import renderer from 'react-test-renderer';

it('page2 component renders correctly', () => {
  const tree = renderer
    .create(<Page2 />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});