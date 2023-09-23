import { AxiosError } from "axios";
import { Component, ErrorInfo, ReactNode } from "react";

export type Err = Error | Response | AxiosError;

export type FallbackProps = { error: Err; handleRetry?: () => void };
interface Props {
    children?: ReactNode;
    fallback?: React.FC<FallbackProps>;
}

interface State {
    hasError: boolean;
    error?: Err;
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
