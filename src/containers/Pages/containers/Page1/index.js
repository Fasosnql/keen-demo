import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';

class Page1 extends Component {
  render() {
    return (
      <div>
        page1
      </div>
    );
  }
}

export default KeenTrack({
  item: 'page1'
})(Page1);
