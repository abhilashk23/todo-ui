import React, { useEffect, useState } from 'react';
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

  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('https://todo-api-oy99.onrender.com/users/verifyToken', { token })
        .then((response) => response.data)
        .then(data => setTimeout(() => {
          setuserData(data);
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
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/" exact>
          {
            userData ? (
              <Redirect to="/user" />
            ) : (
              <Login />
            )
          }
        </Route>
        <Route path="/user" exact>
          {
            userData ? (<Home user={userData} />) : (<Redirect to="/" />)
          }
        </Route>
      </div>
    </Router>
  );
}

export default App;
