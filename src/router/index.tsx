import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

import { Home } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/character/:id", element: <h1>character</h1> },
        ],
    },
]);

export default router;
