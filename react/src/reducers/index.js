import { combineReducers } from 'redux';
import user from './user';
import Input from './Input';
import Find from './find';
import Deleted from './deleted';
import Edit from './edit';
import Update from './update';

const  rootReducer = combineReducers({
  user,
  Input,
  Find,
  Deleted,
  Edit,
  Update
});

export default rootReducer;
