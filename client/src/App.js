import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className='App'>

      {/* Use Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      {/* <header className="hero">
        <h1>India’s Largest Hourly Hotels</h1>
        <p>Book short stays for 3, 7, 11 hours based on your needs.</p>

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
      </header> */}
      <BrowserRouter>
      <Routes>
          <Route path='/home' element={<HomeScreen />} />
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
