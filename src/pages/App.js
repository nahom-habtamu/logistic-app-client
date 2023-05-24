import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";

import MainPage, { MainPageRoute } from './MainPage';
import LoginPage, { LoginPageRoute } from './LoginPage';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path={MainPageRoute}>
                    <MainPage />
                </Route>
                <Route exact path={LoginPageRoute}>
                    <LoginPage />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App;