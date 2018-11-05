import renderer from 'react-test-renderer';

export default (testName, jsx) => {
  it(testName, () => {
    const tree = renderer
      .create(jsx)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
}