import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Home from "./pages/Home/Home.js";
import Saved from "./pages/Saved/Saved.js";
import ArticleThread from "./pages/ArticleThread/ArticleThread.js"
import Footer from "./components/Footer/Footer.js";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/saved" element={<Saved/>} />
          <Route path ="/saved/:articleId" element={<ArticleThread/>}/>
          <Route path="*" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
