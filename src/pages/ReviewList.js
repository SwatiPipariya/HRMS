import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "../App.css"

const ReviewList = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const tableRef = useRef();

    useEffect(() => {
        // Fetch data from the API using Axios
        //   axios.get('http://192.168.2.11:5050/venderList')
        axios.get('http://192.168.2.11:5050/reviewList')
            .then(response => {
                const fetchedData = response.data;
                setData(fetchedData);
                setFilteredData(fetchedData);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toUpperCase();
        const matchingRows = data.filter(row => (
            row.status.toString().toUpperCase().includes(searchTerm) ||
            row.DateOfDelivery.toUpperCase().includes(searchTerm) ||
            row.Language.toUpperCase().includes(searchTerm)

            // Add more conditions for additional columns
        ));
        const nonMatchingRows = data.filter(row => !matchingRows.includes(row));
        setFilteredData([...matchingRows, ...nonMatchingRows]);

        // Scroll to the top of the table
        if (tableRef.current) {
            tableRef.current.scrollTo(0, 0);
        }
    };

    return (
        <div style={{    width: "94vw"}}>
            <h1>Review Lists</h1>
            <input
                type="text"
                id="searchInput"
                onKeyUp={handleSearch}
                placeholder="Search by ID or Name"
            />

            <table ref={tableRef}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>DateOfDelivery</th>
                        <th>TimeOfDelivery</th>
                        <th>Quality</th>
                        <th>Quantity </th>
                        <th>Language</th>
                        <th>Domain</th>
                        <th>status</th>

                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(row => (
                        
                        <tr >
                            <td>{row.UniqueCode}</td>
                            <td>{row.DateOfDelivery}</td>
                            <td>{row.TimeOfDelivery}</td>
                            <td>{row.Quality}</td>
                            <td>{row.Language}</td>
                            {/* <td>{row.Domain}</td> */}
                            <td>{row.FileName}</td>
                            <td>{row.FilePath}</td>
                            <td style={{ backgroundColor: getStatusColor(row.status) }}>
              {row.status}
            </td>

                            {/* Add more cells for additional columns */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        
    );


};

const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Rejected':
        return 'red';
      default:
        return 'transparent'; // or any other default color
    }
  };
export default ReviewList;
