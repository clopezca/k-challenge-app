import axios from "axios";

export class SessionAPI {

    async get (url) {
        return await axios.get(url);
    }
    
    async post (url, data, headers) {
        return axios.post(url, data, headers);
    }
};
