import React from 'react';
import KeenTracking from 'keen-tracking';

const client = new KeenTracking({
  projectId: '5bd9e8e8c9e77c00011b2966',
  writeKey: 'DBA88D743ABD197314EB8BCA6DD3BC6D15E8C3AEB7131A2F4A7CAE0376A8FF5F78348BB94CD993D5B3BBA0007F01D5F3332516FD91CE8068E6EF574770E8665669C2AB5BAB57B2252F8CEC4AEC12F82ABDDA9E5D2107E4BA5DA9F79DAB01DE62'
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
