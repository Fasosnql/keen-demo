import React from 'react';
import KeenAnalysis from 'keen-analysis';

import PageLayout from 'components/PageLayout';
import DashboardLayout from 'components/Layouts/DashboardLayout';
import config from 'configs/mainConfig';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pageViews: [],
      error: '',
    };
    this.client = new KeenAnalysis({
      projectId: config.keenData.projectId,
      readKey: config.keenData.readKey
    });
  }

  componentDidMount() {
    this.client
      .query({
        analysis_type: 'count',
        event_collection: 'pageViews',
        group_by: 'item',
        timeframe: 'this_14_days'
      })
      .then(res => {
        this.setState({
          isLoading: false,
          pageViews: res.result,
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err.errorCode,
        });
      });
  }

  render() {
    return (
      <PageLayout>
        {this.state.isLoading ? 'Loading...' : (
          <div>
            {this.state.error || (<DashboardLayout pageViews={this.state.pageViews} />)}
          </div>
        )}
      </PageLayout>
    )
  }
}


export default Dashboard;
