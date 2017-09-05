import { combineReducers } from 'redux';
import PollReducer from './PollReducer';
import AnswerReducer from './AnswerReducer';
import ScoreReducer from './ScoreReducer';

const headcountReducer = combineReducers({
  poll: PollReducer,
  answer: AnswerReducer,
  score: ScoreReducer
});

export default headcountReducer;
