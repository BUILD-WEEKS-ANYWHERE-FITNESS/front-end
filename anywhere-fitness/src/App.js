import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import logo from './logo.svg';
import './App.css';
import './css/Register.css';
import './css/FormPages.css';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
    <Route path="/login/">
        <Login />
    </Route>
    <Route path="/register/">
        <Register />
    </Route>
    </div>
  );
}

export default App;
