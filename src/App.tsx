import { Outlet } from "react-router-dom";

import "@/styles/reset.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.color.background};
  }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Outlet />
        </>
    );
}

export default App;
