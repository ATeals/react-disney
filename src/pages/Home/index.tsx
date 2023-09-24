import { Outlet } from "react-router-dom";
import { Container, GridContainer, PikerContainer } from "./styled";
import BackgroundColorPicker from "@/components/BackgroundColorPicker";
import CharacterList, { Skeleton as SkeletonCharacterList } from "./CharacterList";
import { Suspense } from "react";

const S = { Container, GridContainer, PikerContainer };

const Home = () => {
    return (
        <S.Container>
            <img
                src={"/images/logo.webp"}
                alt="logo"
            />
            <S.PikerContainer>
                <BackgroundColorPicker />
            </S.PikerContainer>
            <S.GridContainer>
                <Suspense fallback={<SkeletonCharacterList />}>
                    <CharacterList />
                </Suspense>
            </S.GridContainer>
            <Outlet />
        </S.Container>
    );
};

export default Home;
