import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

import {Home, Cart} from '../pages';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
        </Switch>
    )
};

export default App;