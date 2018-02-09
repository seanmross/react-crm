import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import 'typeface-roboto'
import './index.css';

render(
    <BrowserRouter>{routes}</BrowserRouter>,
    document.getElementById('root')
)

