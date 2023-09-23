import { Character } from "@/type";
import { memo } from "react";
import { Link } from "react-router-dom";
import { CharacterImg, ShadowBox } from "./styled";
import { BASICIMG } from "@/constants";

const S = { ShadowBox, CharacterImg };

export const ChareacterBox = memo(({ character }: { character: Character }) => {
    const { id, name, imageUrl } = character;
    return (
        <Link to={`detail/${id}`}>
            <S.ShadowBox>
                <S.CharacterImg
                    src={imageUrl || BASICIMG}
                    alt={name}
                    draggable={false}
                />
                <h1>{name}</h1>
            </S.ShadowBox>
        </Link>
    );
});
