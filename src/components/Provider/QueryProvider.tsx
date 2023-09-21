import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            suspense: true,
            retry: 0,
        },
    },
});

const QueryProvider = ({ children }: { children: ReactNode }) => {
    return <QueryClientProvider client={queryClient}> {children}</QueryClientProvider>;
};

export default QueryProvider;
