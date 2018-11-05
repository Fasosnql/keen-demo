import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';
import Page3Layout from 'components/Layouts/Page3Layout';

class Page3 extends Component {
  render() {
    return (<Page3Layout/>);
  }
}

export default KeenTrack({
  item: 'page3'
})(Page3);
