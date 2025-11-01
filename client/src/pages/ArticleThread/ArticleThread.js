import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API.js";
import CommentCard from "../../components/CommentCard/CommentCard.js"

function ArticleThread() {
    const [article, setArticle] = useState({});
    const [comment, setComment] = useState("");
    const [comment_disable, setCommentDisable] = useState(true);
    const [saved_comment_message, setSavedCommentMessage] = useState("Save Comment");
    const [comment_array, setCommentArray] = useState([]);
    const { articleId } = useParams();

    const getArticle = (id) => {
        API.getArticle(id)
            .then(response => {
                // console.log(response.data)
                setArticle(response.data);
                setCommentArray(response.data.commentary);
            }).catch(error => console.log(error));
    };

    const handleInput = (event) => {
        event.preventDefault();

        var btn_status;
        var comment_string = event.target.value;
        if (comment_string === "") {
            btn_status = true;
        } else {
            btn_status = false;
        }

        setComment(comment_string);
        setCommentDisable(btn_status);
    };

    const handleSubmit = (id, newComment) => {
        console.log(newComment);
        var comments = comment_array;
        comments.push(newComment);
        setCommentArray(comments);
        setSavedCommentMessage("Comment Saved");
        setComment("");
        setCommentDisable(true);
        console.log(comment_array)

        handleUpdate(id, comments);
    };

    const handleUpdate = (id, comment) => {
        API.updateArticle(id, comment)
            .then(response => console.log(response.data))
            .catch(error => console.log(error));
    };

    const handleDelete = (articleId, commentIndex) => {
        // console.log(articleId, commentIndex);
        var comments = comment_array;
        comments.splice(commentIndex, 1);
        setCommentArray(comments);
        handleUpdate(articleId, comments);
        getArticle(articleId);
    };

    useState(() => {
        getArticle(articleId);
    }, []);

    return (
        <div className="container article-thread-container">
            <Row className="mt-4 mb-4">
                <Col>
                    <h2>{article.title}</h2>
                    <p className="text-muted">by {article.author} </p>
                    <img src={article.image} alt={article.title} className="img-fluid mb-3" />
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
                </Col>
                <Button className="back-btn btn-primary">
                    <Link className="back-link" to="/saved">Back to Saved Articles</Link>
                </Button>
            </Row>

            <Row className="mb-4">
                <Col>
                    <h5>Add a Comment</h5>
                    <textarea
                        name="comment"
                        value={comment}
                        onChange={handleInput}
                        className="form-control mb-2"
                        rows="3"
                        placeholder="Write your comment here..."
                    ></textarea>
                    <Button
                        className="btn btn-primary"
                        disabled={comment_disable}
                        onClick={() => handleSubmit(article._id, comment)}
                    >
                        {saved_comment_message}
                    </Button>
                </Col>
            </Row>

            <div className="comment-section mb-5">
                <h5>Comments</h5>
                {comment_array ? (
                    comment_array.map((comm, index) => (
                        <CommentCard
                            key={index}
                            comment={comm}
                            deleteComment={() => handleDelete(article._id, index)}
                        />
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
}

export default ArticleThread; 
