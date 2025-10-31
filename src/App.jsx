

import { useState } from 'react';
import Auth from './pages/login.jsx';
import Home  from './pages/Home.jsx';
import RoutinePage from './pages/Routine-page.jsx';
import About from './pages/About.jsx';
import Feedback from './pages/Feedback.jsx';
import Products from './pages/Products.jsx';
import Result from './pages/Result.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [name, setName] = useState("Guest");

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Routine-page" element={<RoutinePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/products" element={<Products />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </Router>
  )
}

export default App
