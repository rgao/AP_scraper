import { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import API from "../../utils/API.js";
import CommentCard from "../../components/CommentCard/CommentCard.js"
import "./ArticleThread.css"

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
        <div className="container px-4">
           <Row className="article-thread my-5 ml-0 mr-0">
                <Col />
                <Col md="5" lg="6" xl="7" className="content-col ml-auto px-0 pb-3">
                    <header className="mb-1" id="article-title">{article.title}</header>
                    <p className="mt-4" id="article-desc">{article.description}</p>
                    <p className="mb-5 "id="article-date">{article.date}</p>

                    <div className="text-center" id="click-img-comment">
                        <p>Click image to read full article</p>
                    </div>
                </Col>
                <Col md="5" lg="4" xl="3" className="mr-auto px-0 img-col pb-3">
                    <a href={article.url}>
                        <img className="article-img" src={article.image} alt="" />
                    </a>
                </Col>
                <Col />
            </Row>

            <Row className="mb-4">
                <Col xs="10" className="comment-col mx-auto">
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
                        id="save-comment-btn"
                        disabled={comment_disable}
                        onClick={() => handleSubmit(article._id, comment)}
                    >
                        {saved_comment_message}
                    </Button>
                </Col>
            </Row>

            <div className="comment-section my-5">
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
