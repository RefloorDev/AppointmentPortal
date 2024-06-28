import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Booking} from './booking'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="body">
      <Router basename="scheduler">
        <Routes>
          <Route path="/booking" element={<Booking />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
