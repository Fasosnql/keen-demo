import React from 'react';
import KeenAnalysis from 'keen-analysis';

import PageLayout from 'components/PageLayout';
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
        {!this.state.pageViews.length ? 'Loading...' : ''}
        {this.state.error || (
          <div>
            {this.state.pageViews.map((item) => (
              <div key={item.item}>
                {item.item}: {item.result}
              </div>
            ))}
          </div>
        )}
      </PageLayout>
    )
  }
}


export default Dashboard;
