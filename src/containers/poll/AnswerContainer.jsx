import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions/poll/index'

import Answer from '../../components/poll/Answer';

function mapStateToProps(state, ownProps) {

    const {
      questions,
      answers
    } = state.poll;

    const {
      content,
      answer,
      score,
      questionText,
      onClick
    } = ownProps;

    return {
      content,
      answer,
      questionText,
      score
    }
  }


function mapDispatchToProps(dispatch, ownProps){
  return {
    selectAnswer: (answer) => {
      dispatch(selectAnswer(answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
