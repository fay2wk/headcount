import React, { PropTypes } from 'react';
import { Image, Grid, Row, Col} from 'react-bootstrap';
import Buttonlink from './Link';

const Poll = ({}) => (
<div className ='poll-wrapper'>
  <Grid style={{height: "100%"}}>
    <Row style={{height: "100%"}}>
      <Col sm={6} smOffset={6}>
        <div className = "poll-intro">
          <div className = "poll-intro-heading">
            heading or title here
          </div>
        </div>
        <div className = "poll-intro">
          <div className = "poll-intro-sub-heading">
            Poll instructions or desc
          </div>
        </div>
        <Buttonlink/>
      </Col>
    </Row>
  </Grid>
</div>
);

export default Poll;
