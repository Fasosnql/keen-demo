import React from 'react';
import Chart from './index';
import renderer from 'react-test-renderer';

it('Chart component renders correctly', () => {
  const chartData = [];
  const tree = renderer
    .create(<Chart chartData={chartData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});