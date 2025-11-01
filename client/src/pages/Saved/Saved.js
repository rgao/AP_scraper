import { useState } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import SavedArticle from '../../components/ArticleCard/SavedArticle.js';
// import './Saved.css'

function Saved() {

    const [savedArticles, setSavedArticles] = useState([]);
    const [message, setMessage] = useState("");
    const [queryMessage, setQueryMessage] = useState("");
    const [savedMessage, setSavedMessage] = useState("");

    const getSavedArticles = () => {
        API.getArticles()
            .then(response => {
                // console.log(response.data);
                setSavedArticles(response.data);
                checkArticles(response.data);
            })
            .catch(error => console.log(error));
    };

    const handleDelete = (id) => {
        console.log(id)
        API.deleteArticle(id)
            .then(() => getSavedArticles())
            .catch(error => console.log(error));
    };

    const checkArticles = (articles) => {
        // console.log(articles)

        if (articles.length === 0) {
            setMessage("There are no saved articles.");
            setQueryMessage(">> Query for articles.");
            setSavedMessage("");

        } else {
            setSavedMessage("Saved Articles");
        }
    };

    // Fetch saved articles on component mount
    useState(() => {
        getSavedArticles();
    }, []);

    return (
        <div className="container">
            <div className="text-center" id="no-message">
                <p className="pt-3">{message}</p>
                <Link to="/">{queryMessage}</Link>
            </div>

            <div className="text-center mb-2" id="saved-message">
                <p>{savedMessage}</p>
            </div>

            {savedArticles.map((article, i) => (
                <SavedArticle
                    article_id={article._id}
                    title={article.title}
                    author={article.author}
                    url={article.url}
                    image={article.image}
                    delete={() => handleDelete(article._id)}
                    key={i}
                />
            ))}
        </div>
    );
};

export default Saved;
