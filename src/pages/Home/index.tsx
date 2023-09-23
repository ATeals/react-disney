import { Api } from "@/api";
import { QueryKey } from "@/constants";
import { Character } from "@/type";
import { useQuery } from "@tanstack/react-query";

import { Outlet } from "react-router-dom";
import { Container, GridContainer, PikerContainer } from "./styled";
import { ChareacterBox } from "./CharacterBox";
import BackgroundColorPicker from "@/components/BackgroundColorPicker";

const S = { Container, GridContainer, PikerContainer };

const Home = () => {
    const { data } = useQuery<Character[]>([QueryKey.CHARACTERS], Api.getCharacters);

    const chracters = data?.slice(0, 102);

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
                {chracters &&
                    chracters.map((character) => (
                        <ChareacterBox
                            key={character.id}
                            character={character}
                        />
                    ))}
            </S.GridContainer>
            <Outlet />
        </S.Container>
    );
};

export default Home;
