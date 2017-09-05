import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import { store } from '../../store/headcountStore';

export const FETCH_POLL = 'FETCH_POLL';
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const SUBMIT_ANSWERS_ERROR = 'SUBMIT_ANSWERS_ERROR';
export const RECEIVE_SCORE = 'RECEIVE_SCORE';
export const RESET_ANSWERS = 'RESET_ANSWERS';
export const POST_ANSWERS = 'POST_ANSWERS';
export const STORE_SCORE= 'STORE_SCORE';
export const SAVE_SCORE= 'SAVE_SCORE';

export function fetchPoll() {
  const request = axios.get('headcount/api/polls/pollname');

  return {
    type: FETCH_POLL,
    payload: request
  };
};

export const selectAnswer = (answer) => {
  return {
    type: SELECT_ANSWER,
    answer
  };
};

function postAnswers(selectedAnswers) {
  return {
    type: POST_ANSWERS
  };
};

function resetAnswers() {
  return {
    type: RESET_ANSWERS
  };
};

function receiveScore(response) {
  return {
    type: RECEIVE_SCORE,
    payload: response
  };
};

function submitAnswersError(error) {
  return {
    type: SUBMIT_ANSWERS_ERROR,
    error: error.message
  };
};

function postScore(score) {
  return {
    type: POST_SCORE
  }
}

export function submitAnswers(selectedAnswers) {
  return dispatch => {
    dispatch(postAnswers(selectedAnswers))
      return axios.post('headcount/api/polls/get_score', {
        "selected_answers": selectedAnswers
      })
      .then(function (response) {
        dispatch(receiveScore(response))
      })
      .then(dispatch(resetAnswers()))
      .catch(error => dispatch(submitAnswersError(error)))
  };
};

export function saveScore(score) {
  return dispatch => {
    dispatch(postScore(score))
      return axios.put('headcount/api/user', {
        "health_score": score.healthScore,
        "health_quiz_answers": score.userAnswers,
        headers: {
          "Content-Type": "application/json",
          "Access-Token": cookie.load('user.access_token'),
          "Client": cookie.load('user.client'),
          "Token-Type": "Bearer",
          "Uid": cookie.load('user.uid')
        }
      })
  };
};
