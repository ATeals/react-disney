import { createBrowserRouter } from "react-router-dom";

import App from "@/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>404</h1>,
        children: [
            { path: "/", element: <h1>Home</h1> },
            { path: "/character/:id", element: <h1>character</h1> },
        ],
    },
]);

export default router;
