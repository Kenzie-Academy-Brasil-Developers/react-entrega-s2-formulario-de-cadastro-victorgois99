import "./App.css";

import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Dashboard from "./pages/Dashboard/dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Login />}>
          </Route>
          <Route path="/register" element={<Register />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
  );
}

export default App;
