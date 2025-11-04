import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import AP_logo from "../../utils/ap_logo.png"
import "./Nav.css"

function Nav() {
    return (
        <Row className="navbar navbar-expand-lg bg-dark">
            <Col id="logo-col">
                <Link to={"/"}>
                    <img id="ap-logo" src={AP_logo}></img>
                </Link>
            </Col>
            <Col id="search-col"><p className="ml-5">Search Articles</p></Col>
            <Col id="saved-col"><p>Saved Articles</p></Col>
        </Row>
    )
}

export default Nav;
