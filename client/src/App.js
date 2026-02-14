
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">StayFinder</div>
        <div className="nav-links">
          <a href="#">Careers</a>
          <a href="#">Download App</a>
          <a href="#">Login</a>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>India’s Largest Hourly Hotels</h1>
        <p>Book short stays for 3, 7, 11 hours based on your needs.</p>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Where to?" />
          <input type="date" />
          <input type="date" />
          <select>
            <option>1 Room / 2 Guests</option>
            <option>1 Room / 3 Guests</option>
            <option>2 Rooms / 4 Guests</option>
          </select>
          <button className="search-btn">Find Hourly Hotels</button>
        </div>
      </header>

     
    </div>
  );
}

export default App;
