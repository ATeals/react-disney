import { BACKGROUNDCOLOR } from "@/constants";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { DefaultTheme } from "styled-components";

const ThemeProvier = ({ children }: { children: ReactNode }) => {
    const [background] = useLocalStorage(BACKGROUNDCOLOR);

    const theme: DefaultTheme = {
        color: {
            background,
        },
    };

    return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvier;
