import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
import "./SavedArticle.css";

function SavedArticle(props) {
    /* Component to display a saved article with options to view comments or delete */
    return (
        <div className="container">
            <Row className="article mb-3 ml-0 mr-0">
                <Col />
                <Col md="5" lg="6" xl="7" className="content-col ml-auto px-0 pb-3">
                    <header className="mb-1" id="article-title">{props.title}</header>
                    <p className="mt-4" id="article-desc">{props.description}</p>
                    <p className="mb-5 "id="article-date">{props.date}</p>

                    <div className="text-center thread-btn-container mb-3">
                        <Link to={`/saved/${props.article_id}`} className="thread_link">
                            <Button className="btn" id="btn-thread">
                                Comment Thread
                            </Button> 
                        </Link>
                    </div>
                    <div className="text-center delete-btn-container m-3">
                        <Button className="btn" id="btn-delete" onClick={props.delete}>
                            Delete Article
                        </Button>
                    </div>
                </Col>
                <Col md="5" lg="4" xl="3" className="mr-auto px-0 img-col pb-3">
                    <a href={props.url}>
                        <img className="article-img" src={props.image} alt="" />
                    </a>
                </Col>
                <Col />
            </Row>
        </div>
    )
}

export default SavedArticle;
