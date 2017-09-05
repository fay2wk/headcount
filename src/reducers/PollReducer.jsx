import { FETCH_POLL, SUBMIT_ANSWERS } from '../actions/poll/index';

const INITIAL_STATE = {
  name: null,
  questions: [],
  answers: [],
  selectedAnswers: []
};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POLL:
    return {
      ...state,
      name: action.payload.data.name,
      questions: action.payload.data.questions,
      answers: action.payload.data.answer_options
    };
  default:
    return state;
  }
};
