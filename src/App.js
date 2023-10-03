import './App.css';
import HotelList from './components/HotelList';
import hotels from "./hotels.json";
import Tabs from './components/Tabs';
import { useState, useEffect } from 'react';

import {LiaHourglassStartSolid} from "react-icons/lia"

/// new 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hotel from './components/Hotel';
//

function App() {
  const [activeLocation, setActiveLocation] = useState('London');
  const [numHotelsToShow, setNumHotelsToShow] = useState(6);
  const [filteredHotels, setFilteredHotels] = useState(hotels.filter(hotel => hotel.Location === 'London').slice(0, numHotelsToShow));

  useEffect(() => {
    const filtered = hotels.filter(hotel => hotel.Location === activeLocation).slice(0, numHotelsToShow);
    setFilteredHotels(filtered);
  }, [numHotelsToShow, activeLocation]);

  const handleTabClick = (location) => {
    setActiveLocation(location);
    setNumHotelsToShow(6);
  }

  const handleShowMoreClick = () => {
    setNumHotelsToShow(prevNum => prevNum + 3);
  }

  return (
    // <div className="App">
    //   <div className="headdiv">
    //     <h1>Featured Listed Property</h1>
    //     <p>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be..</p>
    //   </div>

    //   <Tabs activeLocation={activeLocation} onTabClick={handleTabClick} />

    //   <HotelList hotels={filteredHotels}/>

    //   <div className='showMore' onClick={handleShowMoreClick}><LiaHourglassStartSolid className='hourGlass'/> <p>Show More</p> </div>
    // </div>

    <Router>
      <div className="App">
        <div className="headdiv">
          <h1>Featured Listed Property</h1>
          <p>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be..</p>
        </div>

        <Routes>
          <Route path="/" element={(
            <>
              <Tabs activeLocation={activeLocation} onTabClick={handleTabClick} />
              <HotelList hotels={filteredHotels} />
              <div className='showMore' onClick={handleShowMoreClick}><LiaHourglassStartSolid className='hourGlass' /> <p>Show More</p> </div>
            </>
          )} />
          <Route path="/property/:id" element={<Hotel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;