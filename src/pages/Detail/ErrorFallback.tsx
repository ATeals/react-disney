import { Err } from "@/components/ErrorBoundary";

import { Modal } from "./styled";

const S = { Modal };

export const ErrorFallback = ({ error }: { error: Err }) => {
    console.log(error);

    return (
        <S.Modal>
            <h1>에러!</h1>
        </S.Modal>
    );
};
