import { Api } from "@/api";
import { QueryKey } from "@/constants";
import { Character } from "@/type";
import { useQuery } from "@tanstack/react-query";

import { ChareacterBox, Skeleton as SkeletonCharacterBox } from "./CharacterBox";

const CharacterList = () => {
    const { data } = useQuery<Character[]>([QueryKey.CHARACTERS], Api.getCharacters);

    const chracters = data?.slice(0, 102);

    return (
        <>
            {chracters &&
                chracters.map((character) => (
                    <ChareacterBox
                        key={character.id}
                        character={character}
                    />
                ))}
        </>
    );
};

export const Skeleton = () => {
    return (
        <>
            {Array.from({ length: 33 }).map((_, i) => (
                <SkeletonCharacterBox key={i} />
            ))}
        </>
    );
};

export default CharacterList;
