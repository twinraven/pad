import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import injectGlobalStyles from './styles/injectGlobalStyles';
import registerServiceWorker from './registerServiceWorker';

injectGlobalStyles();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
