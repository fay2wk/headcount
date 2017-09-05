import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import ContentContainer from '../containers/ContentContainer';
import PollContainer from '../containers/poll/PollContainer';

export default(
  <Route path="/" component={MainContainer} >
    <IndexRoute component={ContentContainer} />
    <Route path="poll" component={PollContainer} />
    {/* <Route path="about" component={AboutContainer} />
    <Route path="dashboard" component={DashboardContainer} />
    <Route path="login" component={loginContainer} /> */}
  </Route>
  );
