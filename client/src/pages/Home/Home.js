import React, { useState } from 'react';
// import './Home.css'

function Home() {

    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState("");
    const [sortBy, setSortBy] = useState("relevance");
    const [topicError, setTopicError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "topic") {
            setTopic(value);
        } else if (name === "sortBy") {
            setSortBy(value);
        }
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
                            id="topic"
                            value={topic}
                            onChange={handleChange}
                            placeholder="Enter search topic"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sortBy">Sort By:</label>
                        <select
                            className="form-control"
                            id="sortBy"
                            value={sortBy}
                            onChange={handleChange}
                        >
                            <option value="relevance">Relevance</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>      
        </div>

    );
}

export default Home;
