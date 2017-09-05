import { POST_ANSWERS, RECEIVE_SCORE, REDIRECT_USER } from '../actions/quiz/index';

const INITIAL_STATE = {
  healthScore: null,
  userAnswers: null
};

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POST_ANSWERS:
    return {
      ...state,
      selectedAnswers: state.answer
    }
    case RECEIVE_SCORE:
    return {
      ...state,
      healthScore: action.payload.data.quizzes[0].health_score,
      userAnswers: action.payload.data.quizzes[1].user_answers
    }
    default:
      return state
  }
};

export default scoreReducer;
