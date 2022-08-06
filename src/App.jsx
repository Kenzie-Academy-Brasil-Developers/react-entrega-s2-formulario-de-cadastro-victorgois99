import "./App.css";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";

import { Switch, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
}

export default App;
