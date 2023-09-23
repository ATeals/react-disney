import { Api } from "@/api";
import { QueryKey } from "@/constants";
import { Character } from "@/type";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { Outlet } from "react-router-dom";
import { Container, GridContainer } from "./styled";
import { ChareacterBox } from "./CharacterBox";

const S = { Container, GridContainer };

const Home = () => {
    const { data } = useQuery<Character[]>([QueryKey.CHARACTERS], Api.getCharacters);

    const characters = useMemo(() => data?.slice(0, 102), [data]);

    return (
        <S.Container>
            <img
                src={"/images/logo.webp"}
                alt="logo"
            />
            <S.GridContainer>
                {characters &&
                    characters.map((character) => (
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
