import { FallbackProps } from "@/components/ErrorBoundary";

import { Modal } from "./styled";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const S = { Modal };

export const ErrorFallback = ({ error, handleRetry }: FallbackProps) => {
    const { reset } = useQueryErrorResetBoundary();
    console.log(error);

    return (
        <S.Modal>
            <h1>에러!</h1>
            <button
                onClick={() => {
                    reset();
                    if (handleRetry) handleRetry();
                }}
            >
                재시도!
            </button>
        </S.Modal>
    );
};
