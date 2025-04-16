import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="/logo.png" alt="Ristorante Deluxe" />
      <span>Ristorante Deluxe</span>
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/booking">Prenota</Link></li>
    </ul>
  </nav>
);

export default Navbar;
