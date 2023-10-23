import { createBrowserRouter } from "react-router-dom";
import React from "react";


import App from "./App";

const router = createBrowserRouter ([
    {path: "/", element: <App />},
    // {path: "/Overview", element: <Overview />},
    
]);

export default router;

