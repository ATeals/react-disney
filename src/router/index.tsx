import { createBrowserRouter } from "react-router-dom";

import { Suspense } from "react";

import { Home, Detail } from "@/pages";

import App from "@/App";

import GlobalErrorBoundary from "./GlobalErrorBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <GlobalErrorBoundary />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Home />
                    </Suspense>
                ),

                children: [{ path: "detail/:id", element: <Detail /> }],
            },
        ],
    },
]);

export default router;
