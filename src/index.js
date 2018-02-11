import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Contacts from './components/contacts'
import ShowContact from './components/show-contact'
import 'typeface-roboto'
import './index.css';

render(
    <BrowserRouter>
        <Switch>
            <Route path='/contacts/:id' component={ShowContact} />
            <Route path='/contacts' component={Contacts} />
            <Redirect from='/' to='/contacts' />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)

