import { Api } from "@/api";
import { BASICIMG, QueryKey } from "@/constants";
import { CharacterDetail } from "@/type";
import { useQuery } from "@tanstack/react-query";
import { FadeBox, Modal } from "./styled";

const S = {
    FadeBox,
    Modal,
};

export const CharacterDetailModal = ({ id }: { id: string }) => {
    const { data } = useQuery<CharacterDetail>([QueryKey.CHARACTER, id], () => Api.getCharacter(id));

    return (
        <>
            <S.FadeBox>
                <S.Modal>
                    <img
                        src={data?.imageUrl || BASICIMG}
                        alt={data?.name}
                    />
                    <h1>{data?.name}</h1>

                    <h2>Films</h2>
                    <ul>
                        {data?.films.map((film) => (
                            <li key={film}>{film}</li>
                        ))}
                    </ul>
                </S.Modal>
            </S.FadeBox>
        </>
    );
};
