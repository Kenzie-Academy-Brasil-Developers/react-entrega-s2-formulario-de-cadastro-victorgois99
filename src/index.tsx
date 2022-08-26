import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import { GlobalStyles, ResetCSS } from "./styles/globalStyle";
import Providers from "./contexts/AuthContext";
import TechProviders from "./contexts/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Providers>
          <TechProviders>
            <GlobalStyles />
            <ResetCSS />
            <ToastContainer />
            <App />
          </TechProviders>
        </Providers>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
