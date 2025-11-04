import { useState } from "react";
import { Button, Row, Col } from 'react-bootstrap'
import "./SearchedArticle.css";

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
        <div className="container mt-3">
            <Row className="article ml-0 mr-0">
                <Col />
                <Col md="5" lg="6" xl="7" className="content-col ml-auto px-0 pb-3">
                    <header className="mb-1" id="article-title">{props.title}</header>
                    <p className="mt-4" id="article-desc">{props.description}</p>
                    <p className="mb-5 "id="article-date">{props.date}</p>

                    <div className="text-center save-btn-container pb-3">
                        <Button className="btn btn-info" onClick={event => handleClick(event)} disabled={saveStatus}>
                            {saveMessage}
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
};    

export default SearchedArticle;
