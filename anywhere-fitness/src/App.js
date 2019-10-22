import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import logo from './logo.svg';
import './App.css';
import './css/index.css';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
    <Route path="/login/">
        <Login />
    </Route>
    <Route path="/register/">
        <Register />
    </Route>
    <Footer />
    </div>
  );
}

export default App;
