import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import App from "./App";
import CreateForm from "./pages/create-user";

const router = createBrowserRouter ([
    {path: "/", element: <Login />},
    {path: "/app", element: <App />},
    {path: "/create", element: <CreateForm />}
    
]);

export default router;

