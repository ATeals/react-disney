import { BACKGROUNDCOLOR } from "@/constants";
import useLocalStorage from "@/hooks/useLocalStorage";

const BackgroundColorPicker = () => {
    const [, setBackgroundColor] = useLocalStorage(BACKGROUNDCOLOR);

    return (
        <>
            <input
                type="color"
                onChange={(e) => setBackgroundColor(e.target.value)}
            />
        </>
    );
};

export default BackgroundColorPicker;
