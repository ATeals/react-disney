import { createBrowserRouter, useRouteError } from "react-router-dom";

import App from "@/App";

import { Home, Detail } from "@/pages";

import { Suspense } from "react";
import { AxiosError } from "axios";

// export const homeQuery = () => ({
//     queryKey: ["characters"],
//     queryFn: Api.getCharacters,
// });

// export const loader = (queryClient: QueryClient) => async () => {
//     const query = homeQuery();
//     return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
// };

// export const characterDetailQuery = (id: string) => ({
//     queryKey: ["character", id],
//     queryFn: () => Api.getCharacter(id),
// });

// export const detailLoader =
//     (queryClient: QueryClient) =>
//     async ({ params }: LoaderFunctionArgs) => {
//         const query = characterDetailQuery(params.id || "");
//         return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
//     };

const Errorboundary = () => {
    const error = useRouteError();

    console.log(error instanceof AxiosError);

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
