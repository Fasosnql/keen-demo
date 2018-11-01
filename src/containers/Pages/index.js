import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
//components
import PageLayout from 'components/PageLayout';
//containers
import Page1 from './containers/Page1';
import Page2 from './containers/Page2';
import Page3 from './containers/Page3';

const PagesContainer = () => (
  <PageLayout>
    <Switch>
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Switch>
  </PageLayout>
);


export default withRouter(PagesContainer);
