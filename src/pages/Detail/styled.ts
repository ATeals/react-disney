import styled, { keyframes } from "styled-components";

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spiner = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
    margin: 50px auto;
`;

export const Modal = styled.div`
    background-color: #e0e0e0;
    width: 480px;
    height: 680px;
    border-radius: 25px;
    text-align: center;
    img {
        object-fit: cover;
        width: 100%;
        height: 70%;
        border-radius: 25px;
    }
    h1 {
        font-weight: 600;
        font-size: 32px;
        width: 100%;
        border-bottom: 1px solid black;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
        margin-bottom: 10px;
        padding: 10px 0;
    }
    h2 {
        font-weight: 400;
        font-size: 24px;
    }
    ul {
        overflow-y: scroll;
        height: 80px;
        padding: 10px;
    }
`;

export const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const fadeIn = keyframes`
    0%{
        opacity : 0
    }
    100%{
        opacity : 1
    }
`;

export const FadeBox = styled.div`
    opacity: 0;
    animation: ${fadeIn} 400ms linear forwards;
`;
