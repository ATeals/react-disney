import ErrorPage from "@/pages/ErrorPage";
import { AxiosError } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const GlobalErrorBoundary = () => {
    const error = useRouteError();

    console.log(error, isRouteErrorResponse(error));

    if (isRouteErrorResponse(error)) {
        return <ErrorPage status={error.status} />;
    }

    if (error instanceof AxiosError) {
        return <h1>Fetch Error</h1>;
    }

    return (
        <>
            <h1>에러!!!</h1>
        </>
    );
};

export default GlobalErrorBoundary;
