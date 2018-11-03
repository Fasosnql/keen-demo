import React from 'react';
import KeenAnalysis from 'keen-analysis';

import PageLayout from 'components/PageLayout';
import Chart from 'components/Chart';
import config from 'configs/mainConfig';
import {
  DataTextWrapper,
  DataChartWrapper,
  HeaderLine,
} from './styles';

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
            {this.state.error || (
              <div>
                <DataTextWrapper>
                  <HeaderLine>PAGE VIEWS:</HeaderLine>
                  {this.state.pageViews.map((item) => (
                    <div key={item.item}>
                      {item.item}: {item.result}
                    </div>
                  ))}
                </DataTextWrapper>
                <DataChartWrapper>
                  <Chart />
                </DataChartWrapper>
              </div>
            )}
          </div>
        )}
      </PageLayout>
    )
  }
}


export default Dashboard;
