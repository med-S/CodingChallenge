import axios from 'axios';
import constants from './constants';

const _axios = axios.create({
    baseURL: constants.baseUrl,
    timeout: constants.timeout,
});


export default class ApiClient {

    static async get(url, parameters, headers, timeout) {
        _axios.defaults.baseURL = constants.baseUrl;
        return await _axios.get(url, parameters, {
            headers,
            timeout,
        });
    }
}