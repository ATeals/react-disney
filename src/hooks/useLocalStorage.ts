import { useSyncExternalStore } from "react";

function useLocalStorage(key: string): [string | null, (value: string) => void] {
    const subscribe = (listener: () => void) => {
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
    };

    const getSnapShot = (): string | null => {
        return window.localStorage.getItem(key);
    };

    const setLocalStorage = (value: string): void => {
        window.localStorage.setItem(key, value);
        window.dispatchEvent(new StorageEvent("storage"));
    };

    return [useSyncExternalStore(subscribe, getSnapShot), setLocalStorage];
}

export default useLocalStorage;
