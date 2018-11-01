import React from 'react';
import KeenTracking from 'keen-tracking';

import config from 'configs/mainConfig';

const client = new KeenTracking({
  projectId: config.keenData.projectId,
  writeKey: config.keenData.writeKey
});

const KeenTrack = (eventParams) => (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      client.recordEvent('pageViews', eventParams);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default KeenTrack;
