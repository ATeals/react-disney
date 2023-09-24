import styled from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => props.theme.color.background};
    width: 680px;
    margin: auto;
    align-items: center;
`;

export const ShadowBox = styled.div`
    border-radius: 28px;
    background: #e0e0e0;
    box-shadow: 7px 7px 19px #949494, -7px -7px 19px #ffffff;
    height: 300px;
    h1 {
        text-align: center;
        width: 100%;
    }
`;

export const CharacterImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 90%;
    border-radius: 28px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 열을 동일한 너비로 설정 */
    grid-gap: 20px; /* 열과 행 사이의 간격 설정 */
`;

export const PikerContainer = styled.div`
    margin: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;
