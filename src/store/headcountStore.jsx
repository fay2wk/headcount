import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import headcountReducer from '../reducers/HeadcountReducer';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const configureStore = (railsProps) => (
  createStore(
    hektorReducer,
    railsProps,
    composeWithDevTools(
    applyMiddleware(promise, thunk)
    )
  )
);

export const store = createStore(headcountReducer);
export default configureStore;
