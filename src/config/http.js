import axios from 'axios';
import { ROUTE_AUTH } from '../utils/consts/routing';
import { getSignIn } from '../utils/helper/local-storage';

const http = axios.create();

/**
 * Interceptor for all requests
 */
http.interceptors.request.use((config) => {

    if (!config.url.includes(ROUTE_AUTH)) {
        let token = getSignIn().token;
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {

    /**
     * Add your error handlers here
     */

    return Promise.reject(error);
});

/**
 * Interceptor for all responces
 */
http.interceptors.response.use((response) => {

    /**
     * Add logic for successful response
     */

    return response;
}, (error) => {

    return Promise.reject(error);
});

export default http;