import './App.css';
import Table from './components/Table';
import Landing from './components/Landing'
import { useState } from 'react';

function App() {
  const [holiday, setHoliday] = useState([]);

  function loadHoliday(countryCode, year) {
    fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`)
      .then((response) => response.json())
      .then((data) => setHoliday(data))
  }


  return (
    <>
      <Landing loadHoliday={loadHoliday} />
      <Table holiday={holiday} />
    </>
    
  );
}

export default App;
