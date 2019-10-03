import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

import { Home, Cart } from '../pages';

const App = () => {
    return (
        <main className="container">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </main>
    )
};

export default App;