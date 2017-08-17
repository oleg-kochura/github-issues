import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { createStore, applyMiddleware }   from 'redux';
import thunk                              from 'redux-thunk';
import { Router, Route, browserHistory }  from 'react-router';
import { Provider }                       from 'react-redux';
import reducer                            from './reducers';
import { composeWithDevTools }            from 'redux-devtools-extension';
import { logger }                         from 'redux-logger';
import Home                               from './pages/Home';
import Details                            from './pages/Details';
import registerServiceWorker              from './registerServiceWorker';
import './index.css';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Home} />
			<Route path="/issue/:id" component={Details}/>
		</Router>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
