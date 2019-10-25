import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'reactstrap';
import Login from './components/Login/Login';
import logo from './logo.svg';
import './App.css';
import './css/index.css';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Landing/Home';
import Classes from './components/Classes/Classes';
import AddClass from './components/Classes/AddClass';
import  PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { ClassContext } from './components/context/classContext';
import data from './data';

function App() {


  // const [session] = useState(data);
	const [session, setSession] = useState(data);

	function addClass (item) {
		setSession([...session, item])
	};



  return (
    <div>
      <ClassContext.Provider value={{session, addClass}} >
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path='/add-class' component={AddClass} />
        <PrivateRoute path="/classes" component={Classes} />
      </Switch>
      <Footer />
      </ClassContext.Provider>
    </div>
  );
}

export default App;
