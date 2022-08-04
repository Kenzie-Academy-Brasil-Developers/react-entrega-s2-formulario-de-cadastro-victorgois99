import "./App.css";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
        <Switch>
          <Route exact path="/" >
            <Login />
          </Route >
          <Route path="/register" >
            <Register />
          </Route >
          <Route path="/dashboard" >
            <Dashboard />
          </Route >
        </Switch>
  );
}

export default App;
