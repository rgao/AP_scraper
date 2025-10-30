import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
// import Saved from "./pages/Saved/Saved.js";
// import ArticleThread from "./pages/ArticleThread/ArticleThread.js"
import Footer from "./components/Footer/Footer.js";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/saved" component={Saved} />
          <Route path ="/saved/:articleId" component={ArticleThread}/> */}
          <Route path="*" component={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
