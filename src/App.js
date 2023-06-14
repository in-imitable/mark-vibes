import Home from './components/pages/Home'
import Social from './components/partials/Social';
import Footer from './components/partials/Footer';
import { Routes, Route,BrowserRouter as Router  } from "react-router-dom"
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Blogs from './components/pages/Blogs';
import Header from './components/partials/Header';


function App() {
 
  return <Router>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Blogs" element={<Blogs/>} />
    </Routes>
  </Router>;
}

export default App;
