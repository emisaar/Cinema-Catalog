import axios from 'axios';
import Config from 'config';

const httpInstance = axios.create({ // axios.create() creates a new instance of axios with a custom config.
    baseURL: Config.API_URL
})

httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = { ...config };
        // newConfig.headers.Authorization = `Bearer ${jwtToken}`;
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpInstance;