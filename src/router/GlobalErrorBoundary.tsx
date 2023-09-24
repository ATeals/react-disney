import { AxiosError } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const GlobalErrorBoundary = () => {
    const error = useRouteError();

    console.log(error, isRouteErrorResponse(error));

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <h1>Page Not Found</h1>;
            case 500:
                return <h1>Server Error</h1>;
            default:
                return <h1>Error</h1>;
        }
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
