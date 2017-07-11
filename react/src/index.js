import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router'
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loginUserSuccess } from './actions/userAction'
import { requireAuthentication } from './components/authenticatedComponent/AuthenticatedComponent';


import App from './App';
import Home from './Home';
import About from './About';
import Smart from './Smart';
import Input from './Input';
import './index.css';

const store = configureStore();

let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={About} />
                <Route path="about" component={About} />
                <Route path="home" component={requireAuthentication(Home,false)} />
                <Route path="smart" component={requireAuthentication(Smart,2)} />
                <Route path="input" component={requireAuthentication(Input,2)} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
