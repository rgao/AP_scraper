import { Link } from "react-router-dom";
import { Button, Row, Col } from 'react-bootstrap'
// import "./SavedArticleCard.css";

function SavedArticle(props) {
    return (
        <div className="container">
            <Row className="article mb-3 ml-0 mr-0">
                <Col size="12" md="6" lg="5" xl="4" className="mr-auto p-0 img-col">
                    <a href={props.url}>
                        <img className="article-img" src={props.image} alt="" />
                    </a>
                </Col>

                <Col size="12" md="6" lg="7" xl="8" className="content-col">
                    <header className="my-1" id="article-title">{props.title}</header>
                    <p className="mb-1" id="article-desc">{props.description}</p>
                    <p className="article-author mb-5">{props.author}</p>

                    <div className="d-md-block text-center delete-btn-container">
                        <Button className="btn btn-danger" onClick={props.delete}>
                            Delete Article
                        </Button>
                    </div>
                    <div className="d-md-block text-center thread-btn-container">
                        <Link to={`/saved/${props.article_id}`} className="thread_link">
                            <Button className="btn btn-warning">
                                Comment Thread
                            </Button> 
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SavedArticle;
