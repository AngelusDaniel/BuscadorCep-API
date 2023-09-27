import axios from "axios";

const api = axios.create({

    baseURL:"https://opencep.com/v1/"
});

export default api;

