import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { submitAnswers } from '../../actions/poll/index';
import QuestionList from '../../components/poll/QuestionList';

function mapStateToProps(state, ownProps){

    const {
      questions,
      answers
    } = state.poll;

    const {
      content,
      answer,
      score,
      question,
      onClick,
      isLoggedin,
      questionIndex
    } = ownProps;

    return {
      content,
      answer,
      question,
      score,
      selectedAnswers: state.answer,
      isLoggedin: state.user.uid
    }
  }

function mapDispatchToProps(dispatch, ownProps){
  return {
    submitAnswers: (selectedAnswers) => {
      dispatch(submitAnswers(selectedAnswers))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
