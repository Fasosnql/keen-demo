import React from 'react';
import Page3 from './index';
import renderer from 'react-test-renderer';

it('page2 component renders correctly', () => {
  const tree = renderer
    .create(<Page3 />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});