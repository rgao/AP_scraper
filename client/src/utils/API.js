import axios from "axios";

export default {
    searchArticles: (topic, sortBy) => {
        return axios.get(`/api/search/?topic=${topic}&sortBy=${sortBy}`);
    },

    getArticles: () => {
        return axios.get("/api/article/");
    },

    saveArticle: saveData => {
        console.log(saveData);
        return axios.post("/api/article/", saveData);
    },

    // updateArticle: (id, comments) => {
    //     return axios.put("/api/article/" + id, comments);
    // },

    deleteArticle: id => {
        return axios.delete("/api/article/" + id);
    },

    getArticle: id => {
        return axios.get("/api/article/" + id);
    }
};
