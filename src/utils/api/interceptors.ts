import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        console.log(config.url);

        return config;
    },

    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },

    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if ("response" in error) {
            return error.response.data;
        }

        return {
            statusCode: 0,
            message: error.message,
        };
    }
);
