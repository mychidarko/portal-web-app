import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><Layout /></BrowserRouter>, document.getElementById('root'));
serviceWorker.register();
