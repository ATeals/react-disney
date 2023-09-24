const ErrorPage = ({ status }: { status: number }) => {
    switch (status) {
        case 404:
            return <h1> 404 NotFound</h1>;
    }

    return <h1>Error</h1>;
};

export default ErrorPage;
