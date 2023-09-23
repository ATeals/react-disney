import axios from "axios";

const BASEURL = "https://disney_api.nomadcoders.workers.dev";

const PARAMS = {
    CHRACTER: "/characters",
};

const Axios = axios.create({
    baseURL: BASEURL,
    validateStatus: (status) => {
        return status >= 200 && status <= 500;
    },
});

const request = async (url: string) => {
    const res = await Axios.get(url);

    if (res.status !== 200) throw new Response("Api Error", { status: 500 });

    return res.data;
};

export const Api = {
    getCharacters: () => request(PARAMS.CHRACTER),
    getCharacter: (id: string) => request(PARAMS.CHRACTER + `/${id}`),
};
