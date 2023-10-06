import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>
);

