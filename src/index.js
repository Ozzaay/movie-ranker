import React from "react";
import  ReactDOM  from "react-dom";
import { RouterProvider } from 'react-router-dom'
import router from './nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
