import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';

class Page3 extends Component {
  render() {
    return (
      <div>
        page3
      </div>
    );
  }
}

export default KeenTrack({
  item: 'page3'
})(Page3);
