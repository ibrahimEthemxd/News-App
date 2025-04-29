import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:cat" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
