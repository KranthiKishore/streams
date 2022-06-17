import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';
import streamsReducer from './streamReducer';
export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  streams: streamsReducer,
});
