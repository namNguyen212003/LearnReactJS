import axiosClient from "./axiosClient";

const handleApi = async (url, data, method = "get", additionalHeaders = {}) => {
    return axiosClient(url, {
        method: method,
        data,
        headers: {
            ...additionalHeaders,
        },
    });
};

export default handleApi;
