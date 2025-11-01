import { useState } from "react";
import { Button, Row, Col } from 'react-bootstrap'
// import "./SearchedArticleCard.css";

function SearchedArticle(props) {
    const [saveMessage, setSaveMessage] = useState("Save Article");
    const [saveStatus, setSaveStatus] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();

        setSaveMessage("Saved");
        setSaveStatus(true);

        props.save();
    }   

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
                    <p id="article-author">{props.author}</p>

                    <div className="text-center d-none d-md-block save-btn-container">
                        <Button className="btn btn-info save-btn-md" onClick={event => handleClick(event)} disabled={saveStatus}>
                            {saveMessage}
                        </Button>
                    </div>
                </Col>

                <Col className="text-center d-md-none">
                    <Button className="btn btn-info mb-1" onClick={event => handleClick(event)} disabled={saveStatus}>
                        {saveMessage}
                    </Button>
                </Col>
            </Row>
        </div>
    )
};    

export default SearchedArticle;
