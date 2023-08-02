import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import User from './components/User';
import Admin from './components/Admin';
import HomePage from './components/HomePage';
import OTP from './components/OTP/OTP';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="users" element={<User />} />
          <Route path="admin" element={<Admin />} />
          <Route path="otpapp" element={<OTP />} />
        </Route >
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

