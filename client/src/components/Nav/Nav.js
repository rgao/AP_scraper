import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'
import AP_logo from "../../utils/ap_logo.png"
import "./Nav.css"

function Nav() {
    return (
        <Row className="navbar navbar-expand-lg bg-dark">
            <Col id="logo-col">
                <Link to={"/"}>
                    <img id="ap-logo" alt="" src={AP_logo}></img>
                </Link>
            </Col>
            <Col id="search-col">
                <Link to={"/"} className=" article-link ml-5">Search Articles</Link></Col>
            <Col id="saved-col">
                <Link to={"/saved"} className="article-link">Saved Articles</Link>
            </Col>
        </Row>
    )
}

export default Nav;
