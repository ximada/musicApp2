import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configStore';
import {Provider} from 'react-redux'


const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
