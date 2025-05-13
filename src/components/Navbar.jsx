import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: '#f0f0f0',
      padding: '1rem',
      boxSizing: 'border-box',
      display: 'flex'
    }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/top100">Top 100</Link>
    </nav>
  );
}

export default Navbar;
