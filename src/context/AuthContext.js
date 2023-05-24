import React, { useState } from 'react';
import { login } from '../api/repository';

export const AuthContext = React.createContext(null);

const initialState = {
    loggedInUser: null,
    isLoginPending: false,
    loginError: null
}

export const ContextProvider = props => {
    const [state, setState] = useState(initialState);

    const setLoginPending = (isLoginPending) => setState({ isLoginPending });
    const setLoginSuccess = (loggedInUser) => setState({ loggedInUser });
    const setLoginError = (loginError) => setState({ loginError });

    const login = (email, password) => {
        setLoginPending(true);
        setLoginSuccess(null);
        setLoginError(null);

        fetchLogin(email, password, value => {
            setLoginPending(false);
            if ((typeof value) === Error) {
                setLoginError(value.message);
            }
            else {
                setLoginSuccess(value);
            }
        })
    }

    const logout = () => {
        setLoginPending(false);
        setLoginSuccess(null);
        setLoginError(null);
    }

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

const fetchLogin = async (email, password, callback) => {

    let result = await login(email, password);

    if (result.data) {
        const object = { email, password };
        localStorage.setItem("loggedInUser", JSON.stringify(object));
        return callback(result.data);
    } else {
        return callback(new Error('Invalid email and password'));
    }
}