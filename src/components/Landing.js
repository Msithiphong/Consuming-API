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
            <h1>Public Holidays Finder</h1>
            <div className="input-bar">
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