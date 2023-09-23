import { createBrowserRouter, useRouteError } from "react-router-dom";

import App from "@/App";

import { Home, Detail } from "@/pages";

import { Suspense } from "react";

const Errorboundary = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>에러!</h1>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Errorboundary />,
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
