import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';

class Page2 extends Component {
  render() {
    return (
      <div>
        page2
      </div>
    );
  }
}

export default KeenTrack({
  item: 'page2'
})(Page2);
