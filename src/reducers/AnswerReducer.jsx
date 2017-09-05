import { SELECT_ANSWER, RESET_ANSWERS } from '../actions/quiz/index';
import { store } from '../store/hektorStore';

const INITIAL_STATE = {
  answerId: null,
  questionId: null,
  questionText: "",
  questionCategory: "",
  content: "",
  score: ""
};

const selectedAnswer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case SELECT_ANSWER:
    return {
      ...state,
      answerId: action.answer.id,
      questionId: action.answer.question_id,
      questionText: action.answer.question_text,
      questionCategory: action.answer.question_category,
      content: action.answer.content,
      score: action.answer.score
    }
  default:
    return state;
  }
}

const answerReducer = (state = [], action) => {
  switch(action.type) {
    case SELECT_ANSWER:
    return [
      ...state,
      selectedAnswer(undefined, action)
    ]
    case RESET_ANSWERS:
    return [
      INITIAL_STATE
    ]
    default:
      return state
  }
}

export default answerReducer;
