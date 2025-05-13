import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Top100 from './pages/Top100';

function App() {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top100" element={<Top100 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
