import React from 'react';
import KeenAnalysis from 'keen-analysis';

import PageLayout from 'components/PageLayout';
import DashboardLayout from 'components/Layouts/DashboardLayout';
import config from 'configs/mainConfig';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
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
          pageViews: res.result,
        });
      })
      .catch(err => {
        this.setState({
          error: err.errorCode,
        });
      });
  }

  render() {
    return (
      <PageLayout>
        {!this.state.pageViews.length ? 'Loading...' : (
          <div>
            {this.state.error || (<DashboardLayout pageViews={this.state.pageViews} />)}
          </div>
        )}
      </PageLayout>
    )
  }
}


export default Dashboard;
