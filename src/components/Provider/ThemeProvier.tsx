import { ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { DefaultTheme } from "styled-components";

const LightTheme: DefaultTheme = {
    color: {
        cardColor: "#f1f2f6",
        text: "#000000",
        background: "#5352ed",
        boardColor: "#d3d1d2",
    },
};

const ThemeProvier = ({ children }: { children: ReactNode }) => {
    return <Provider theme={LightTheme}>{children}</Provider>;
};

export default ThemeProvier;
