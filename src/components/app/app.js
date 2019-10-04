import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import './app.css';

import { Home, Cart } from '../pages';

const App = () => {
    return (
        <main className="container">
            <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </main>
    )
};

export default App;