import React from "react";
import ReactDOM from "react-dom/client";

import { QueryProvider, ThemeProvier, RouterProvider } from "./components/Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryProvider>
            <ThemeProvier>
                <RouterProvider />
            </ThemeProvier>
        </QueryProvider>
    </React.StrictMode>
);
