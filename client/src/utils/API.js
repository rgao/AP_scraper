import axios from "axios";
import API_BASE_URL from './apiconfig.js';
// API utility object for making HTTP requests to the backend server
const API ={
    searchArticles: (topic, sortBy) => {
        // Search for articles based on topic and sorting preference
        return axios.get(`${API_BASE_URL}/api/search/?topic=${topic}&sortBy=${sortBy}`);
    },

    getArticles: () => {
        // Retrieve all saved articles from the backend
        console.log(API_BASE_URL);
        return axios.get(`${API_BASE_URL}/api/articles/`);
    },

    saveArticle: saveData => {
        // Save a new article to the backend
        console.log(saveData);
        return axios.post(`${API_BASE_URL}/api/articles/`, saveData);
    },

    updateArticle: (id, comments) => {
        // Update an existing article's comments
        console.log(id, comments)
        return axios.put(`${API_BASE_URL}/api/article/` + id, comments);
    },

    deleteArticle: id => {
        // Delete an article by its ID
        return axios.delete(`${API_BASE_URL}/api/article/` + id);
    },

    getArticle: id => {
        // Retrieve a specific article by its ID
        return axios.get(`${API_BASE_URL}/api/article/` + id);
    }
};

export default API;
