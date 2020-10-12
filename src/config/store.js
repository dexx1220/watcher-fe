import { combineReducers } from 'redux';
import incidents from '../reducers/incidents';

const rootReducer = combineReducers({
  incidents
});

export default rootReducer;
