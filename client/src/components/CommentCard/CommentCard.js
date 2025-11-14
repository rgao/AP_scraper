import { Row, Col } from 'react-bootstrap'
import "./CommentCard.css";

function CommentCard(props) {
    /* Component to display individual comments */
    return (
        <div className="comment-card my-3">
            <Row className="comment-row mb-2">
                <Col />
                <Col xs="10" className="comment-container">
                    <p>
                        <span id="comment-intro">Anonymous says:</span> {props.comment}
                    </p>
                </Col>
                <Col />
            </Row>
            {/* <Row className="mb-4">
                <Col />
                <Col xs="10" className="delete-comment">
                    <Button className="delete-comment-btn btn btn-danger" onClick={() => props.deleteComment()}>Delete Comment</Button>
                </Col>
                <Col />
            </Row> */}
        </div>
    )
}

export default CommentCard;
