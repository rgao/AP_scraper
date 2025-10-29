import { Link } from "react-router-dom";
// import "./Nav.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <Link to={"/"} className="text-center">
                Associated Press Article Scraper
            </Link>
        </nav>
    )
}

export default Nav;
