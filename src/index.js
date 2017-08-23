import React from 'react';
import ReactDOM from 'react-dom';
import './assets/custom.css';
import App from './main/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
