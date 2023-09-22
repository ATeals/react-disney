import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: React.FC<{ error: Error | Response; handleRetry?: () => void }>;
}

interface State {
    hasError: boolean;
    error?: Error | Response;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error | Response): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("캐치한 에러:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError && this.state.error) {
            return this.props.fallback ? (
                <this.props.fallback
                    error={this.state.error}
                    handleRetry={() => {
                        this.setState({ hasError: false });
                    }}
                />
            ) : (
                <h1> 알 수 없는 에러!</h1>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
