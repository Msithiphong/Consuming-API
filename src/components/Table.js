import './Table.css';
function Table({ holiday }) {     
          
    return(
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Local Name</th>
                    <th>Country Code</th>
                    <th>Global</th>
                    </tr>
                </thead>
                <tbody>
                    {holiday.map((holiday, index) => (
                    <tr key={index}>
                        <td>{holiday.date}</td>
                        <td>{holiday.name}</td>
                        <td>{holiday.localName}</td>
                        <td>{holiday.countryCode}</td>
                        <td>
                        <input type="checkbox" checked={holiday.global} readOnly />
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    

};

export default Table;