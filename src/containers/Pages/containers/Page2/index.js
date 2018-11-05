import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';
import Page2Layout from 'components/Layouts/Page2Layout';

class Page2 extends Component {
  render() {
    return (<Page2Layout />);
  }
}

export default KeenTrack({
  item: 'page2'
})(Page2);
