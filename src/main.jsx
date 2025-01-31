import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router-dom';

import router from './routes';

import { Provider } from "react-redux";
import { store } from "./store/store";

import axios from 'axios';

import "./index.css";

/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
