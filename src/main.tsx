import React from "react";
import ReactDOM from "react-dom/client";

import { QueryProvider } from "./components/Provider";
import RouterProvider from "./router/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryProvider>
            <RouterProvider />
        </QueryProvider>
    </React.StrictMode>
);
