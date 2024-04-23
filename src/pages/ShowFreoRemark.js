// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button, FormControl } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faDownload } from '@fortawesome/free-solid-svg-icons';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// const ViewGsheet = () => {
//   const [clients, setClients] = useState([]);
//   const [filteredClients, setFilteredClients] = useState([]);
//   const [searchInput, setSearchInput] = useState('');

//   useEffect(() => {
//     console.log('hello');
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get('http://192.168.2.11:5050/freo/data');
//       setClients(response.data);
//       setFilteredClients(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
//     const filtered = clients.filter(client =>
//       (client.username && client.username.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.referenceId && client.referenceId.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.freoEmail && client.freoEmail.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.date && client.date.includes(searchInput))
//     );
//     setFilteredClients(filtered);
//   };



//   return (
//     <div style={{ marginLeft: '60px' }}>
//       <h2>Call List</h2>
//       <div style={{ marginBottom: '10px' ,display:'flex',justifyContent:"space-between" }}>
//         <div style={{display:'flex', gap:'8px'}}>

//         <FormControl
//           type="text"
//           style={{ border: '.5px solid gray', borderRadius: '5px' }}
//           placeholder="Search by Name or Status"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           />
//         <Button className='SearchModelButton' style={{marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
//           </div>
//           <div>

//         <ReactHTMLTableToExcel
//           id="test-table-xls-button"
//           className="download-table-xls-button"
//           table="clients-table"
//           filename="Freo_Report"
//           sheet="clients"
//           // buttonText={<FontAwesomeIcon icon={faDownload} />}
//           buttonText="Download Excel"
//           // buttonText={<FontAwesomeIcon icon="fa-solid fa-arrow-down" />}

//         />
//         </div>
//       </div>
//       <Table striped bordered hover id="clients-table">
//         <thead>
//           <tr>
//           <th>Date</th>
//             <th>Username</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Reference Id</th>
//             <th>Dispossition</th>
//             <th>Remark 2</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredClients.map(client => (
//             <tr key={client.id}>
//               <td>{client.date}</td>
//               <td>{client.username}</td>
//               <td>{client.name}</td>
//               <td>{client.freoEmail}</td>
//               <td>{client.referenceId}</td>
//               <td>{client.remark}</td>
//               <td>{client.remark2}</td>
//               <td>{client.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ViewGsheet;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button, FormControl } from 'react-bootstrap';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

// const ViewGsheet = () => {
//   const [clients, setClients] = useState([]);
//   const [filteredClients, setFilteredClients] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(1000); // Change the number of rows per page here

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get('http://192.168.2.11:5050/freo/data');
//       setClients(response.data);
//       setFilteredClients(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
//     const filtered = clients.filter(client =>
//       (client.username && client.username.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.referenceId && client.referenceId.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.freoEmail && client.freoEmail.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.date && client.date.includes(searchInput))
//     );
//     setFilteredClients(filtered);
//   };

//   // Calculate index of the first and last rows of current page
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredClients.slice(indexOfFirstRow, indexOfLastRow);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div style={{ marginLeft: '60px' }}>
//       <h2>Call List</h2>
//       <div style={{ marginBottom: '10px', display: 'flex', justifyContent: "space-between" }}>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <FormControl
//             type="text"
//             style={{ border: '.5px solid gray', borderRadius: '5px' }}
//             placeholder="Search by Name or Status"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <Button className='SearchModelButton' style={{ marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
//         </div>
//         <div>
//           <ReactHTMLTableToExcel
//             id="test-table-xls-button"
//             className="download-table-xls-button"
//             table="clients-table"
//             filename="Freo_Report"
//             sheet="clients"
//             buttonText="Download Excel"
//           />
//         </div>
//       </div>
//       <Table striped bordered hover id="clients-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Username</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Reference Id</th>
//             <th>Dispossition</th>
//             <th>Remark 2</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRows.map(client => (
//             <tr key={client.id}>
//               <td>{client.date}</td>
//               <td>{client.username}</td>
//               <td>{client.name}</td>
//               <td>{client.freoEmail}</td>
//               <td>{client.referenceId}</td>
//               <td>{client.remark}</td>
//               <td>{client.remark2}</td>
//               <td>{client.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       {/* Pagination */}
//       <div style={{ textAlign: 'center' }}>
//         {Array.from({ length: Math.ceil(filteredClients.length / rowsPerPage) }, (_, i) => (
//           <Button key={i} onClick={() => paginate(i + 1)}>
//             {i + 1}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewGsheet;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button, FormControl } from 'react-bootstrap';
// import { DateRangePicker } from '@mui/lab';
// import { TextField } from '@mui/material';

// const ViewGsheet = () => {
//   const [clients, setClients] = useState([]);
//   const [filteredClients, setFilteredClients] = useState([]);
//   const [searchInput, setSearchInput] = useState('');
//   const [dateRange, setDateRange] = useState([null, null]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage] = useState(1000); // Change the number of rows per page here

//   useEffect(() => {
//     fetchClients();
//   }, []);

//   const fetchClients = async () => {
//     try {
//       const response = await axios.get('http://192.168.2.11:5050/freo/data');
//       setClients(response.data);
//       setFilteredClients(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
//     const filtered = clients.filter(client =>
//       (client.username && client.username.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.referenceId && client.referenceId.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.freoEmail && client.freoEmail.toLowerCase().includes(searchInput.toLowerCase())) ||
//       (client.date && client.date.includes(searchInput))
//     );
//     setFilteredClients(filtered);
//   };

//   // Calculate index of the first and last rows of current page
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredClients.slice(indexOfFirstRow, indexOfLastRow);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   const handleDateChange = (newValue) => {
//     setDateRange(newValue);
//   };

//   const handleDownloadReport = async () => {
//     try {
//       const startDate = dateRange[0] ? dateRange[0].toISOString().split('T')[0] : null;
//       const endDate = dateRange[1] ? dateRange[1].toISOString().split('T')[0] : null;

//       const response = await axios.post('http://192.168.2.11:5050/report/download', {
//         startDate,
//         endDate
//       });

//       // Handle response as needed
//     } catch (error) {
//       console.error('Error downloading report:', error);
//     }
//   };

//   return (
//     <div style={{ marginLeft: '60px' }}>
//       <h2>Call List</h2>
//       <div style={{ marginBottom: '10px', display: 'flex', justifyContent: "space-between" }}>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <FormControl
//             type="text"
//             style={{ border: '.5px solid gray', borderRadius: '5px' }}
//             placeholder="Search by Name or Status"
//             value={searchInput}
//             onChange={(e) => setSearchInput(e.target.value)}
//           />
//           <Button className='SearchModelButton' style={{ marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
//         </div>
//         <div>
//           <Button onClick={handleDownloadReport}>Download Report</Button>
//         </div>
//       </div>
//       <div>
//         <DateRangePicker
//           startText="Start Date"
//           endText="End Date"
//           value={dateRange}
//           onChange={handleDateChange}
//           renderInput={(startProps, endProps) => (
//             <React.Fragment>
//               <TextField {...startProps} />
//               <span style={{ margin: '0 10px' }}> to </span>
//               <TextField {...endProps} />
//             </React.Fragment>
//           )}
//         />
//       </div>
//       <Table striped bordered hover id="clients-table">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Username</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Reference Id</th>
//             <th>Dispossition</th>
//             <th>Remark 2</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRows.map(client => (
//             <tr key={client.id}>
//               <td>{client.date}</td>
//               <td>{client.username}</td>
//               <td>{client.name}</td>
//               <td>{client.freoEmail}</td>
//               <td>{client.referenceId}</td>
//               <td>{client.remark}</td>
//               <td>{client.remark2}</td>
//               <td>{client.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       {/* Pagination */}
//       <div style={{ textAlign: 'center' }}>
//         {Array.from({ length: Math.ceil(filteredClients.length / rowsPerPage) }, (_, i) => (
//           <Button key={i} onClick={() => paginate(i + 1)}>
//             {i + 1}
//           </Button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewGsheet;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, FormControl } from 'react-bootstrap';
import { DateRange } from 'react-date-range';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const ViewGsheet = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(1000); // Change the number of rows per page here

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/freo/data');
      setClients(response.data);
      setFilteredClients(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filtered = clients.filter(
      (client) =>
        (client.username &&
          client.username.toLowerCase().includes(searchInput.toLowerCase())) ||
        (client.referenceId &&
          client.referenceId.toLowerCase().includes(searchInput.toLowerCase())) ||
        (client.freoEmail &&
          client.freoEmail.toLowerCase().includes(searchInput.toLowerCase())) ||
        (client.date && client.date.includes(searchInput))
    );
    setFilteredClients(filtered);
  };

  // Calculate index of the first and last rows of current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredClients.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleDownloadReport = async () => {
    try {
      const startDate = dateRange[0].startDate
        ? dateRange[0].startDate.toISOString().split('T')[0]
        : null;
      const endDate = dateRange[0].endDate
        ? dateRange[0].endDate.toISOString().split('T')[0]
        : null;

      const response = await axios.post(
        'http://192.168.2.11:5050/report/download',
        {
          startDate,
          endDate,
        }
      );

      // Handle response as needed
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  return (
    <div style={{ marginLeft: '60px' }}>
      <h2>Call List</h2>
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <FormControl
            type="text"
            style={{
              border: '.5px solid gray',
              borderRadius: '5px',
            }}
            placeholder="Search by Name or Status"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            className="SearchModelButton"
            style={{ marginLeft: '20px' }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button id='test-table-xls-button' onClick={handleDownloadReport}>Download Report</Button>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="clients-table"
            filename="Freo_Report"
            sheet="clients"
            // buttonText={<FontAwesomeIcon icon={faDownload} />}
            buttonText="Download Excel"
          // buttonText={<FontAwesomeIcon icon="fa-solid fa-arrow-down" />}

          />
        </div>
      </div>
      <div>
        <DateRange
          editableDateInputs={true}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          className="preview"
        />
      </div>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

<div style={{ textAlign: 'center', padding: '3vw 0vw 2vw 0vw', width: '50%', overflowX: 'scroll' }}>
  {Array.from(
    { length: Math.ceil(filteredClients.length / rowsPerPage) },
    (_, i) => (
      <Button
        key={i}
        onClick={() => paginate(i + 1)}
        style={{
          backgroundColor: currentPage === i + 1 ? 'blue' : 'transparent',
          color: currentPage === i + 1 ? 'white' : 'black',
          borderRadius: '5px',
          margin: '0 5px',
          padding: '5px 10px',
        }}
      >
        {i + 1}
      </Button>
    )
  )}
</div>
</div>

      <Table striped bordered hover id="clients-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Reference Id</th>
            <th>Dispossition</th>
            <th>Remark 2</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((client) => (
            <tr key={client.id}>
              <td>{client.date}</td>
              <td>{client.username}</td>
              <td>{client.name}</td>
              <td>{client.freoEmail}</td>
              <td>{client.referenceId}</td>
              <td>{client.remark}</td>
              <td>{client.remark2}</td>
              <td>{client.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Pagination */}
     

    </div>
  );
};

export default ViewGsheet;
