import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Router, browserHistory, IndexRoute } from 'react-router';
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin';
var ReactDOM = require('react-dom');


let store = createStore(reducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Provider store={store}><Router routes = {routes} history = {browserHistory}></Router></Provider>, document.getElementById('root'));
});
