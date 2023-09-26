import axios from "axios";

export default {
    post(url, data) {
        return axios.post(url, data).catch(error => {
            this.handleGlobalError(error);
            throw error;
        });
    },

    put(url, data) {
        return axios.put(url, data).catch(error => {
            this.handleGlobalError(error);
            throw error;
        });
    },

    get(url) {
        // console.log('GET URL');
        return axios.get(url).catch(error => {
            this.handleGlobalError(error);
            throw error;
        });
    },

    delete(url) {
        return axios.delete(url).catch(error => {
            this.handleGlobalError(error);
            throw error;
        });
    },

    handleGlobalError(error) {
        const originalRequest = error.config;
        let method = originalRequest.method;
        let url = originalRequest.url;
        let data = originalRequest.data;
        if (method === 'get' || method === 'GET') {
            this.get(url).then(() => {
                location.reload();
            });
        } else if (method === 'post' || method === 'POST') {
            if (data) {
                this.post(url, data).then(() => {
                    location.reload();
                });
            } else {
                this.post(url).then(() => {
                    location.reload();
                });
            }
        } else if (method === 'put' || method === 'PUT') {
            this.put(url).then(() => {
                location.reload();
            });
        } else if (method === 'put' || method === 'PUT') {
            this.put(url).then(() => {
                location.reload();
            });
        } else{
            return null;
        }
    }
};