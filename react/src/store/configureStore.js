import { createStore , applyMiddleware , compose  } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import rootReducer from '../reducers';


//初始化  连接Active 和reducers
export default function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware)
    )
  );

  return store;
}
