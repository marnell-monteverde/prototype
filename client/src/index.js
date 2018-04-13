import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';


import Reducers from './reducers';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>,
				 document.getElementById('root'));
registerServiceWorker();
