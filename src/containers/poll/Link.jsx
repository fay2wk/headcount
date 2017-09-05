import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router';

export default class Buttonlink extends Component {
  render() {
    return (
      <Button id="quiz-btn" bsStyle="primary" bsSize="large" block >
        <Link
          id="quiz-btn"
          to="/quiz"
          >
          Text text
        </Link>
     </Button>
    )
  }
}
