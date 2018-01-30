import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
