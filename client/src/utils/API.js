import axios from "axios";

export default {
    searchArticles: (topic, sortValue) => {
        // console.log(topic, sortValue);
        return axios.get(`http://localhost:5000/api/search/?topic=${topic}&sortBy=${sortValue}`);
    },

    getArticles: () => {
        return axios.get("http://localhost:5000/api/articles/");
    },

    saveArticle: saveData => {
        console.log(saveData);
        return axios.post("http://localhost:5000/api/articles/", saveData);
    },

    updateArticle: (id, comments) => {
        console.log(id, comments)
        return axios.put("http://localhost:5000/api/article/" + id, comments);
    },

    deleteArticle: id => {
        console.log(id)
        return axios.delete("http://localhost:5000/api/article/" + id);
    },

    getArticle: id => {
        return axios.get("http://localhost:5000/api/article/" + id);
    }
};
