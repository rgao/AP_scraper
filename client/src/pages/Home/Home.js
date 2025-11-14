import { useState } from 'react';
import { Button } from 'react-bootstrap';
import API from "../../utils/API.js";
import SearchedArticle from '../../components/ArticleCard/SearchedArticle.js';
import './Home.css'

function Home() {
    const [articles, setArticles] = useState([]); // Array to hold searched articles
    const [topic, setTopic] = useState(""); // Search topic input
    const [sortBy, setSortBy] = useState("0"); // Sort by option
    const [topicError, setTopicError] = useState(""); // Error message for topic input

    const handleChange = (e) => {
        /* handle input changes for topic and sortBy */
        const { name, value } = e.target;
        if (name === "topic") {
            setTopic(value);
        } else if (name === "sortBy") {
            setSortBy(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Validate topic input and make API call */
        if (topic === "") {
            setTopicError("Please specify a topic");
        } else {
            setTopicError("");
            // Fetch articles based on topic and sortBy
            API.searchArticles(topic, parseInt(sortBy))
                .then(response => {
                    console.log(response.data);
                    setArticles(response.data);
                    setTopic("");
                })
                .catch(error => console.log(error));

            console.log(`Searching for articles on topic: ${topic} sorted by: ${sortBy}`);
        }
    };

    const handleSave = (article) => {
        /* Save article to the database */
        API.saveArticle(article)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };

    return (
        <div className="home-container mt-4">
            <div className='form-container mt-3 mb-5'>
                <form>
                    <div className="form-group mb-3" id="topic-input">
                        <label htmlFor="topic">Search Topic:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="topic"
                            value={topic}
                            onChange={handleChange}
                            placeholder="Keyword search..."
                        />
                    </div>
                    <div id="topic-error" className="text-danger">
                        {topicError}
                    </div>
                    <div className="form-group mb-3" id="select-input">
                        <label htmlFor="sortBy">Sort By:</label>
                        <select
                            className="form-select"
                            name="sortBy"
                            value={sortBy}
                            onChange={handleChange}
                        >
                            <option value="0">Relevance</option>
                            <option value="3">Newest</option>
                            <option value="2">Oldest</option>
                        </select>
                    </div>
                    <Button variant="primary" type="submit" id="search-btn" onClick={handleSubmit}>
                        Search Articles
                    </Button>
                </form>
            </div>

            <div className="article-results">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <SearchedArticle
                            key={index}
                            title={article.title}
                            description={article.description}
                            date={article.date}
                            url={article.url}
                            image={article.image}
                            save={() => handleSave(article)}
                        />
                    ))
                ) : (
                    <p id="no-article-message">Search and save articles from the Associated Press</p>
                )}
            </div>
        </div>
    );
}

export default Home;
