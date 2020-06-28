import React from 'react';
import './App.css';

import './Input.js';
//import  Table1 from './Table1.js';
//import Table11 from './Table11';
//import Table12 from './Table12';
import Table13 from './Table13';
import Gradient from './Gradient';
import Gradient1 from './Gradient1';
import Gradient2 from './Gradient12';
import Login2 from './Login2';
import Login from './Login';
import Login3 from './Login3';
///import TableForm2 from './TableForm2';
//import Table2 from './Table2';
//import TableForm from './TableForm';
//import Table3 from './Table3';
import Home from './Home';
import Nav from './Nav';
import {BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom';

import {BrowserRouter} from 'react-router-dom';

import { useState, useEffect } from 'react';

/*

const createTokenProvider = () => {

    
    let _token: { accessToken: string, refreshToken: string } = 
    JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;

    const getExpirationDate = (jwtToken?: string): number | null => {
        if (!jwtToken) {
            return null;
        }
    
        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
    
        // multiply by 1000 to convert seconds into milliseconds
        return ((jwt && jwt.exp) && jwt.exp * 1000) || null;
    };


    const isExpired = (exp?: number) => {
        if (!exp) {
            return false;
        }
    
        return Date.now() > exp;
    };

    const getToken = async () => {
        if (!_token) {
            return null;
        }
    
        if (isExpired(getExpirationDate(_token.accessToken))) {
            const updatedToken = await fetch('/update-token', {
                method: 'POST',
                body: _token.refreshToken
            })
                .then(r => r.json());
    
            setToken(updatedToken);
        }
    
        return _token && _token.accessToken;
    };

    const isLoggedIn = () => {
        return !!_token;
    };

    let observers: Array<(isLogged: boolean) => void> = [];

    const subscribe = (observer: (isLogged: boolean) => void) => {
        observers.push(observer);
    };
    
    const unsubscribe = (observer: (isLogged: boolean) => void) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };


    const setToken = (token: typeof _token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        _token = token;
        notify();
    };


    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
    
};


export const createAuthProvider = () => {

    
const tokenProvider = createTokenProvider();


const login: typeof tokenProvider.setToken = (newTokens) => {
    tokenProvider.setToken(newTokens);
};

const logout = () => {
    tokenProvider.setToken(null);
};

const authFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {
    const token = await tokenProvider.getToken();

    init = init || {};

    init.headers = {
        ...init.headers,
        Authorization: `Bearer ${token}`,
    };

    return fetch(input, init);
};


const useAuth = () => {
    const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

    useEffect(() => {
        const listener = (newIsLogged: boolean) => {
            setIsLogged(newIsLogged);
        };

        tokenProvider.subscribe(listener);
        return () => {
            tokenProvider.unsubscribe(listener);
        };
    }, []);

    return [isLogged] === [typeof isLogged]; 
};



    return {
        useAuth,
        authFetch,
        login,
        logout
    }
};

export const {useAuth, authFetch, login, logout} = createAuthProvider();













const LoginComponent = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        password: ''
    });

    const onChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [name]: value})
    };

    const onSubmit = (event?: React.FormEvent) => {
        if (event) {
            event.preventDefault();
        }

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(token => login(token))
    };

    return <form onSubmit={onSubmit}>
        <input name="name"
               value={credentials.name}
               onChange={onChange}/>
        <input name="password"
               value={credentials.password}
               onChange={onChange}/>
    </form>
};


export default LoginComponent 


//<Table13/> to działa <TableForm2/>
//<Table2/> <Table3/> <Table11/><Table12/> <Table1/> <TableForm/> <Table2/>

export const Body = () => {
    const [logged] = useAuth();
return(
    <BrowserRouter>

        <div className="Table"> 
        <Gradient/>
        <Nav/>
        <Gradient1/>
        <Gradient2/>
            <div className="Home2">
            <Switch>
            {!logged && <>
                
                <Route path="/login" component={Login2}/>
                <Redirect to="/login"/>
            </>}
            {logged && <>
                <Route path="/" exact component={Home}/>
                <Route path="/tab" component={Table13}/>
                <Route path="/tab2" component={Table13}/>
            </>}
                 
                 
                
            </Switch>
            </div>
         </div>
    </BrowserRouter>
)
    
}


*/




function Body(){

    
return(


/*
<Router>
    <div className="Table">
    <Gradient/>
    <Nav/>
    <Gradient1/>
    <Gradient2/>
        <div className="Home2">
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tab"  component={Table13}/>
            <Route path="/tab2" component={Table13}/>

        </Switch>
    </div>
</div>


</Router>

*/
<div className="Table">
<Gradient/>
<Login3/>
</div>
)



}



export default Body;

  
  