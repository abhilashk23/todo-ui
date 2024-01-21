import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import Cookies from 'js-cookie';
import axios from 'axios';

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:5000/users/verifyToken', { token })
        .then((response) => response.data)
        .then(data => setTimeout(() => {
          console.log(data);
        }), 1000)
        .catch(error => {
          console.error('Token verification failed:', error);
        });
    }
  }, []);

  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/user" exact>
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
