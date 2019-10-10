import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from "react-router-dom"
import './index.css';
// import Life from './Life';
import Index from './Admin';
import Admin from './Admin';
import Login from './pages/Login';
ReactDOM.render(
<Router>
    <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/" component={Admin}></Route>
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
