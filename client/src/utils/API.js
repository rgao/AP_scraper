import axios from "axios";
import API_BASE_URL from './apiconfig.js';

const API ={
    searchArticles: (topic, sortValue) => {
        // console.log(topic, sortValue);
        return axios.get(`${API_BASE_URL}/api/search/?topic=${topic}&sortBy=${sortValue}`);
    },

    getArticles: () => {
        return axios.get(`${API_BASE_URL}/api/articles/`);
    },

    saveArticle: saveData => {
        console.log(saveData);
        return axios.post(`${API_BASE_URL}/api/articles/`, saveData);
    },

    updateArticle: (id, comments) => {
        console.log(id, comments)
        return axios.put(`${API_BASE_URL}/api/article/` + id, comments);
    },

    deleteArticle: id => {
        console.log(id)
        return axios.delete(`${API_BASE_URL}/api/article/` + id);
    },

    getArticle: id => {
        return axios.get(`${API_BASE_URL}/api/article/` + id);
    }
};

export default API;
