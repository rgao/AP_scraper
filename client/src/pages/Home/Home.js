import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import API from "../../utils/API.js";
import SearchedArticle from '../../components/ArticleCard/SearchedArticle.js';
// import './Home.css'

function Home() {

    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState("");
    const [sortBy, setSortBy] = useState("relevance");
    const [topicError, setTopicError] = useState("");

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        if (name === "topic") {
            setTopic(value);
        } else if (name === "sortBy") {
            setSortBy(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (topic === "") {
            setTopicError("Please specify a topic");
        } else {
            setTopicError("");
            // Implement API call logic here
            let sortValue = "0";
            if (sortBy === "oldest") {
                sortValue = "2";
            } else if (sortBy === "newest") {
                sortValue = "3";
            };

            API.searchArticles(topic, sortValue)
                .then(response => {
                    // console.log(response.data);
                    setArticles(response.data);
                    setTopic("");
                })
                .catch(error => console.log(error));

            console.log(`Searching for articles on topic: ${topic} sorted by: ${sortBy}`);
        }
    };

    const handleSave = (article) => {
        // console.log("Saving article:", article);
        API.saveArticle(article)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };

    return (
        <div className="home-container">
            <h1>Welcome to the AP News Scraper</h1>
            <p>This application allows you to search and save articles from the Associated Press News website.</p>
            <p>Use the navigation bar to explore the features of the app.</p>

            <div className='form-container'>
                <form>
                    <div className="form-group">
                        <label htmlFor="topic">Search Topic:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="topic"
                            value={topic}
                            onChange={handleChange}
                            placeholder="Enter search topic"
                        />
                    </div>
                    <div id="topic-error" className="text-danger">
                        {topicError}
                    </div>
                    <div className="form-group">
                        <label htmlFor="sortBy">Sort By:</label>
                        <select
                            className="form-control"
                            name="sortBy"
                            value={sortBy}
                            onChange={handleChange}
                        >
                            <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Search Articles
                    </Button>
                    <Link to="/saved" className="btn btn-secondary ml-2">
                        View Saved Articles
                    </Link>
                </form>
            </div>
            
            <div className="article-results">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <SearchedArticle
                            key={index}
                            title={article.title}
                            description={article.description}
                            author={article.author}
                            url={article.url}
                            image={article.image}
                            save={() => handleSave(article)}
                        />
                    ))
                ) : (
                    <p>No articles found. Please enter a topic and search.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
