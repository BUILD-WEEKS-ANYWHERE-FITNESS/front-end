import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './css/Register.css';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
    <Route path="/register/">
        <Register />
    </Route>
    <Route exact path="/">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Route>
    </div>
  );
}

export default App;
