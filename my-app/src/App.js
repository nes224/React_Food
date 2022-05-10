import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'
import {BrowserRouter as Router , Routes, Route } from  "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className = "container main">
          <Routes>
            <Route path ="/" element ={<Home />} />
            <Route path="/recipes" element ={<Recipes />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
