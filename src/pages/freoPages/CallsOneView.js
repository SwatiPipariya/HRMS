

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CallsOneView = () => {
//   const [data, setData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('4/4/2024'); // Initial date filter
//   const [selectedUser, setSelectedUser] = useState('Shraddha Chouhan'); // Initial user filter

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://192.168.2.11:5050/freo/data'); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//       setData(response.data);
//       //data aagaya hai 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
// // console.log(data);
// const filterData = () => {
//     // Filter data based on selected date and user
//     const filtered = data.filter(item => item.Date === selectedDate && item.Name === selectedUser);
//     console.log("Filtered Data:", filtered); // Debug log for filtered data
//     return filtered;
//   };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   const filteredData = filterData();
// console.log("after filter data                   "+filteredData);
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Data Sheet</h1>
//       <div className="mb-4">
//         <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
//         <input
//           type="text"
//           id="dateFilter"
//           value={selectedDate}
//           onChange={handleDateChange}
//           className="border border-gray-300 px-2 py-1 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="userFilter" className="mr-2">Filter by User:</label>
//         <input
//           type="text"
//           id="userFilter"
//           value={selectedUser}
//           onChange={handleUserChange}
//           className="border border-gray-300 px-2 py-1 rounded"
//         />
//       </div>
//       <h2 className="text-lg font-bold mb-2">Date: {selectedDate}</h2>
//       <h2 className="text-lg font-bold mb-2">User: {selectedUser}</h2>
//       {filteredData.length > 0 ? (
//         <div>
//           <p className="mb-2">Total Calls: {filteredData.length}</p>
//           <ul className="list-disc ml-6">
//             {filteredData.map(item => (
//               <li key={item.ReferenceId} className="mb-1">{item.Dispossition} - {item.Remark}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No data available for the selected user on the selected date.</p>
//       )}
//     </div>
//   );
// };

// export default CallsOneView;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CallsOneView = () => {
//   const [data, setData] = useState([]);
//   const [selectedDate, setSelectedDate] = useState('04/06/2024'); // Initial date filter
//   const [selectedUser, setSelectedUser] = useState('Shraddha Chouhan'); // Initial user filter

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://192.168.2.11:5050/freo/data');
//       setData(response.data);
//       console.log("Fetched data:", response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

// //   const filterData = () => {
// //     // Filter data based on selected date and user
// //     const filtered = data.filter(item => item.date === selectedDate && item.name === selectedUser);
// //     console.log(selectedDate);
// //     console.log(selectedUser);
// //     console.log("Filtered Data:", filtered);
// //     return filtered;
// //   };


//   const filterData = () => {
//     // Filter data based on selected date and user
//     const filtered = data.filter(item => {
//       // Trim leading/trailing whitespace from the Date field
//       const itemDate = item.date.trim();
//       // Check if both Date and Name match selected values
//       return itemDate === selectedDate && item.name === selectedUser;
//     });
//     console.log("Filtered Data:", filtered);
//     return filtered;
//   };



//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const handleUserChange = (e) => {
//     setSelectedUser(e.target.value);
//   };

//   const filteredData = filterData();

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Data Sheet</h1>
//       <div className="mb-4">
//         <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
//         <input
//           type="text"
//           id="dateFilter"
//           value={selectedDate}
//           onChange={handleDateChange}
//           className="border border-gray-300 px-2 py-1 rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="userFilter" className="mr-2">Filter by User:</label>
//         <input
//           type="text"
//           id="userFilter"
//           value={selectedUser}
//           onChange={handleUserChange}
//           className="border border-gray-300 px-2 py-1 rounded"
//         />
//       </div>
//       <h2 className="text-lg font-bold mb-2">Date: {selectedDate}</h2>
//       <h2 className="text-lg font-bold mb-2">User: {selectedUser}</h2>
//       {/* {filteredData.length > 0 ? (
//   <div>
//     <p className="mb-2">Total Calls: {filteredData.length}</p>
//     <ol className="list-disc ml-6" style={{listStyle:'numar'}}>
//       {filteredData.map(item => (
//         <li key={item.referenceId} className="mb-1">{item.remark} - {item.remark2}</li>
//       ))}
//     </ol>
//   </div>
// ) : (
//   <p>No data available for the selected user on the selected date.</p>
// )} */}
// {filteredData.length > 0 ? (
//   <div>
//     <p className="mb-2">Total Calls: {filteredData.length}</p>
//     <table className="border-collapse border border-gray-400">
//       <thead>
//         <tr>
//           <th className="border border-gray-400 px-4 py-2">Dispossition</th>
//           <th className="border border-gray-400 px-4 py-2">Remark</th>
//         </tr>
//       </thead>
//       <tbody>
//         {filteredData.map(item => (
//           <tr key={item.referenceId}>
//             <td className="border border-gray-400 px-4 py-2">{item.remark}</td>
//             <td className="border border-gray-400 px-4 py-2">{item.remark2}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// ) : (
//   <p>No data available for the selected user on the selected date.</p>
// )}

//     </div>
//   );
// };

// export default CallsOneView;









import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CallsOneView = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('04/06/2024'); // Initial date filter
  const [selectedUser, setSelectedUser] = useState('Shraddha Chouhan'); // Initial user filter
  const [selectedRemark, setSelectedRemark] = useState(''); // Initial remark filter

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/freo/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = () => {
    // Filter data based on selected date, user, and remark
    const filtered = data.filter(item => {
      const itemDate = item.date.trim();
      return itemDate === selectedDate && item.name === selectedUser && (selectedRemark === '' || item.remark === selectedRemark);
    });
    return filtered;
  };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleRemarkChange = (e) => {
    setSelectedRemark(e.target.value);
  };

  const usernames = [...new Set(data.map(item => item.name))];
  const filteredData = filterData();
  const handleDateChange = (e) => {
    const rawDate = e.target.value; // Get the raw date value in yyyy-mm-dd format
    const [year, month, day] = rawDate.split("-"); // Split the date components
    
    // Reformat the date to mm/dd/yyyy format
    const formattedDate = `${month}/${day}/${year}`;
    
    setSelectedDate(formattedDate); // Set the formatted date to the state
  };
  // Extract unique remarks for dropdown options
  const remarks = [...new Set(data.map(item => item.remark))];

  return (
    <div className="container mx-auto p-4">

        <div style={{display:'flex' , gap:'20px'}}>

      <h1 className="text-2xl font-bold mb-4">Data Sheet</h1>
      <div className="mb-4">
        <label htmlFor="dateFilter" className="mr-2">Filter by Date:</label>
        <input
          type="date"
          id="dateFilter"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 px-2 py-1 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="userFilter" className="mr-2">Filter by User:</label>
        <select
          id="userFilter"
          value={selectedUser}
          onChange={handleUserChange}
          className="border border-gray-300 px-2 py-1 rounded"
        >
          <option value="">All Users</option>
          {usernames.map(username => (
            <option key={username} value={username}>{username}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="remarkFilter" className="mr-2">Filter by Remark:</label>
        <select
          id="remarkFilter"
          value={selectedRemark}
          onChange={handleRemarkChange}
          className="border border-gray-300 px-2 py-1 rounded"
        >
          <option value="">All Remarks</option>
          {remarks.map(remark => (
            <option key={remark} value={remark}>{remark}</option>
          ))}
        </select>
      </div>
      </div>
      <p className="text-lg font-bold mb-2">Date: {selectedDate}</p>
      <p className="text-lg font-bold mb-2">User: {selectedUser}</p>

      {filteredData.length > 0 ? (
  <div>
    <p className="mb-2">Total Calls: {filteredData.length}</p>
    <table className="border-collapse border border-gray-400">
      <thead>
        <tr>
        <th className="border border-gray-400 px-4 py-2">Sno</th>

          <th className="border border-gray-400 px-4 py-2">Referance Id</th>
          <th className="border border-gray-400 px-4 py-2">Dispossition</th>
          {/* <th className="border border-gray-400 px-4 py-2">Remark</th> */}
          <th className="border border-gray-400 px-4 py-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (     
          <tr key={item.referenceId}>
                 <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-400 px-4 py-2">{item.referenceId}</td>
            <td className="border border-gray-400 px-4 py-2">{item.remark}</td>
            {/* Render remark2 only when not filtering based on remark */}
            {/* {selectedRemark === '' && (
              <td className="border border-gray-400 px-4 py-2">{item.remark2}</td>
            )} */}
            <td className="border border-gray-400 px-4 py-2">{item.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <p>No data available for the selected user on the selected date.</p>
)}
    </div>
  );
};

export default CallsOneView;
