import { useState } from 'react';
import './Landing.css'
function Landing({ loadHoliday }) {
    const [countryCode, setCountryCode] = useState('');
    const [year, setYear] = useState('');

    const handleInputChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleSubmit = () => {
        if (countryCode && year)
            loadHoliday(countryCode, year);
    };

    return(
        <>
            <h1>Holidays Viewer</h1>
            <h2>Public Holidays Finder</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter Country Code"
                    value={countryCode}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={handleYearChange}
                />
                <button onClick={handleSubmit}>Submit</button>
                
            </div>
        </>
        
    );
};
 
export default Landing;