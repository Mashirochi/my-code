import axios from "axios";

let store;
export const injectStore = _store => {
    store = _store;
}
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 3500,
    withCredentials: true
});

instance.defaults.withCredentials = true;
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
    console.log(headerToken)
    if (headerToken) {
        config.headers.Authorization = `Bearer ${headerToken}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (+error.response.status === 400) {
        let headerToken = store.getState()?.account?.userInfo?.access_token ?? "";
        if (headerToken) {
            error.config.headers.Authorization = `Bearer ${headerToken}`;
        }
        return axios.request(error.config);
    }
    // Do something with response error
    if (error && error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
});


export default instance;