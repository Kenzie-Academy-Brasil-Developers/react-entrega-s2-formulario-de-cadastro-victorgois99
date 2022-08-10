import "./App.css";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";

import { Switch, Route } from "react-router-dom";

import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const {autoLogin} = useContext(AuthContext)
  autoLogin()

  return (
    <>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </>
  );
}

export default App;
