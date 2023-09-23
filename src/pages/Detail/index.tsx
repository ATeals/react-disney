import ErrorBoundary from "@/components/ErrorBoundary";
import { Suspense } from "react";

import { json, useParams } from "react-router-dom";

import { Container, Modal, Spiner } from "./styled";
import { CharacterDetailModal } from "./CharacterDetail";
import { ErrorFallback } from "./ErrorFallback";

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
            <ErrorBoundary fallback={ErrorFallback}>
                <Suspense fallback={<Spiner />}>
                    <CharacterDetailModal id={id} />
                </Suspense>
            </ErrorBoundary>
        </S.Container>
    );
};

export default Detail;
