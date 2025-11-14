import { useState } from 'react';
import { Link } from "react-router-dom";
import API from '../../utils/API';
import SavedArticle from '../../components/ArticleCard/SavedArticle.js';
import './Saved.css'
import { Row, Col } from 'react-bootstrap';

function Saved() {
    const [savedArticles, setSavedArticles] = useState([]); // Array to hold saved articles
    const [message, setMessage] = useState(""); // Message for no saved articles
    const [queryMessage, setQueryMessage] = useState(""); // Message to prompt querying for articles
    const [savedMessage, setSavedMessage] = useState(""); // Message for saved articles section

    const getSavedArticles = () => {
        /* Fetch saved articles from the database */
        API.getArticles()
            .then(response => {
                console.log(response.data);
                setSavedArticles(response.data);
                checkArticles(response.data);
            })
            .catch(error => console.log(error));
    };

    const handleDelete = (id) => {
        /* Delete article from the database */
        API.deleteArticle(id)
            .then(() => getSavedArticles())
            .catch(error => console.log(error));
    };

    const checkArticles = (articles) => {
        /* Check if there are saved articles and set messages accordingly */
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
        <div className="container mb-5">
            <Row className="text-center" id="no-message">
                <p className="pt-3">{message}</p>
                <Link to="/">{queryMessage}</Link>
            </Row>
            <Row className="mt-3 mb-4" id="saved-message-container">
                <Col />
                <Col xl="10">
                    <p className="pb-5" id="saved-message">{savedMessage}</p>
                </Col>
                <Col />
            </Row>

            {savedArticles.map((article, i) => (
                <SavedArticle
                    article_id={article._id}
                    title={article.title}
                    description={article.description}
                    date={article.date}
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
