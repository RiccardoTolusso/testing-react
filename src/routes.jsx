import { createBrowserRouter } from "react-router-dom"

import Layout from "./layouts/base-layout"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <h1>Custom Error Page</h1>,
        children: [
            {
                path: "",
                element: <h1>Home Page</h1>
            },
            {
                path: "login",
                element: <h1>Login Page</h1>
            },
            {
                path: "register",
                element: <h1>Register Page</h1>
            }
        ]
    },
  ]);

console.log(router);


export default router