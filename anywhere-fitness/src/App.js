import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import logo from './logo.svg';
import './App.css';
import './css/Register.css';
import Register from './components/Register/Register';

function App() {
  return (
    <Container>
    <Route path="/login/">
        <Login />
    </Route>
    <Route path="/register/">
        <Register />
    </Route>
    </Container>
  );
}

export default App;
