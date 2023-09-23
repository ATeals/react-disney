import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";

import { json, useParams } from "react-router-dom";

import { Container, Modal, Spiner } from "./styled";
import { CharacterDetailModal } from "./CharacterDetail";
import { ErrorFallback } from "./ErrorFallback";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

const S = { Container, Modal, Spiner };

const Detail = () => {
    const { id } = useParams();

    if (!id) throw json({ massage: "Not Found Id" }, 404);

    const clickModalDisable = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget !== e.target) return;

        window.history.back();
    };

    return (
        <S.Container onClick={clickModalDisable}>
            <QueryErrorResetBoundary>
                <ErrorBoundary fallback={ErrorFallback}>
                    <Suspense fallback={<Spiner />}>
                        <CharacterDetailModal id={id} />
                    </Suspense>
                </ErrorBoundary>
            </QueryErrorResetBoundary>
        </S.Container>
    );
};

export default Detail;
