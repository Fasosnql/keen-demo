import React from 'react';
import App from './index';
import renderer from 'react-test-renderer';

it('App component renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});