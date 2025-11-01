import { Button, Row, Col } from 'react-bootstrap'

function CommentCard(props) {
    return (
        <div className="comment-card">
            <Row className="comment-row mb-2">
                <Col />
                <Col xs="10" className="comment-container">
                    <p>{props.comment}</p>
                </Col>
                <Col />
            </Row>
            <Row className="mb-4">
                <Col />
                <Col xs="10" className="delete-comment">
                    <Button className="delete-comment-btn btn btn-danger" onClick={() => props.deleteComment()}>Delete Comment</Button>
                </Col>
                <Col />
            </Row>
        </div>
    )
}

export default CommentCard;
