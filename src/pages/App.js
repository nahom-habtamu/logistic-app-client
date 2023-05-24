import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";

import MainPage, { MainPageRoute } from './MainPage';
import LoginPage, { LoginPageRoute } from './LoginPage';

import { useEffect, useContext } from 'react';

import { AuthContext } from '../context/AuthContext.js';

const App = () => {

    const { login } = useContext(AuthContext);

    useEffect(() => {
        const savedUserData = localStorage.getItem('loggedInUser');
        if (savedUserData) {
            let parsed = JSON.parse(savedUserData);
            login(parsed.email, parsed.password);
        }
    }, [])


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