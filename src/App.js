import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';

function App() {
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
