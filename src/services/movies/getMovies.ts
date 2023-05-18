import { buildUrl } from "utils/api";
import httpInstance from "../httpInstance";

export const getPopular = async (path?: string) => {
    let res: any;
    const endpoint = path ? path : buildUrl('popular');

    await httpInstance.get(endpoint)
        .then((data) => {
            res = data;
        })
        .catch((error) => {
            res = error.response;
        });
    return res;
}

export const getTopRated = async (path?: string) => {
    let res: any;
    const endpoint = path ? path: buildUrl('top_rated');

    await httpInstance.get(endpoint)
        .then((data) => {
            res = data;
        })
        .catch((error) => {
            res = error.response;
        });
    return res;
}

export const getNowPlaying = async (path?: string) => {
    let res: any;
    const endpoint = path ? path: buildUrl('now_playing');

    await httpInstance.get(endpoint)
        .then((data) => {
            res = data;
        })
        .catch((error) => {
            res = error.response;
        });
    return res;
}

export const getMovieById = async (id: string) => {
    let res: any;
    const endpoint = buildUrl(id);

    await httpInstance.get(endpoint)
        .then((data) => {
            res = data;
        })
        .catch((error) => {
            res = error.response;
        });
    return res;
}

export const getRecommendations = async (path: string) => {
    let res: any;
    // const recommendationPath = id + '/recommendations';
    // const endpoint = buildUrl(recommendationPath);

    await httpInstance.get(path)
        .then((data) => {
            res = data;
        })
        .catch((error) => {
            res = error.response;
        });
    return res;
}