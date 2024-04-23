

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import './Calling.css';

const SmartContactManager = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const options = [
    'Select Freo Id',
    'freo1@avyaanmgmt.com',
    'freo2@avyaanmgmt.com',
    'freo3@avyaanmgmt.com',
    'freo4@avyaanmgmt.com',
    'freo5@avyaanmgmt.com',
    'freo6@avyaanmgmt.com',
    'freo7@avyaanmgmt.com',
    'freo8@avyaanmgmt.com',
    'freo9@avyaanmgmt.com',
    'freo10@avyaanmgmt.com',
    'freo11@avyaanmgmt.com',
    'freo12@avyaanmgmt.com',
    'freo13@avyaanmgmt.com',
    'freo14@avyaanmgmt.com',
    'freo15@avyaanmgmt.com',
    'freo16@avyaanmgmt.com',
    'freo17@avyaanmgmt.com',
    'freo18@avyaanmgmt.com',
    'freo19@avyaanmgmt.com',
    'freo20@avyaanmgmt.com',
    'freo21@avyaanmgmt.com',
    'freo22@avyaanmgmt.com',
    'freo23@avyaanmgmt.com',
    'freo24@avyaanmgmt.com',
    'freo25@avyaanmgmt.com',
    'freo26@avyaanmgmt.com',
  ];

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
      const interval = setInterval(() => {
          setDateTime(new Date());
          localStorage.setItem('Time', document.getElementById('Time').innerHTML);
          localStorage.setItem('Date', document.getElementById('Date').innerHTML);
      }, 1000); // Update every second

      return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    const savedValue = localStorage.getItem('selectedOption');
    if (savedValue) {
      setSelectedOption(savedValue);
    }
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    localStorage.setItem('selectedOption', selectedValue);
    setSelectedOption(selectedValue);
  };

  const sendDataToAPI = () => {
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('Name');
    const date = localStorage.getItem('Date');
    const time = localStorage.getItem('Time');
    
    const referenceId = document.getElementById('Reference').value ;
    const remark= document.getElementById('dropdown').value ;
const remark2 = document.getElementById('remark2').value ;


if (remark === '' || remark2 === '' || username === '' || name === '' || date === '' || referenceId === '') {
  // Alert the user or handle the validation error in some way
  // document.getElementById('sendBtn').disabled = true
  // console.log(remark.value + 'remark')
  alert('Please fill out all required fields');
  return; // Exit the function early to prevent form submission
}

// const apiUrl = ; // Replace with your API endpoint

    const data = {
      username: username,
      name: name,
      date: date,
      time: time,
      freoEmail: selectedOption,
      referenceId : referenceId,
      remark : remark,
      remark2 : remark2,
      // Add other data you want to send
    };

    axios.post('http://192.168.2.11:5050/freo/data', data,)
      .then(response => {
        console.log('Data sent successfully');
        window.location.reload();

        // Optionally, do something after successful submission
      })
      .catch(error => {
        console.error('Error:', error);

      });
  };

// const sendDataToAPI = (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior

//   const username = localStorage.getItem('username');
//   const name = localStorage.getItem('name');
//   const date = localStorage.getItem('Date');
//   const time = localStorage.getItem('Time');
  
//   const referenceId = document.getElementById('Reference').value; // corrected .value
//   const remark= document.getElementById('dropdown').value; // corrected .value
//   const remark2 = document.getElementById('remark2').value; // corrected .value
  
//   // const apiUrl = ; // Replace with your API endpoint

//   const data = {
//     username: username,
//     name: name,
//     date: date,
//     time: time,
//     freoEmail: selectedOption,
//     referenceId : referenceId,
//     remark : remark,
//     remark2 : remark2,
//     // Add other data you want to send
//   };

//   axios.post('http://192.168.2.11:5050/freo/data', data)
//     .then(response => {
//       console.log('Data sent successfully');
//       // Optionally, do something after successful submission
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// };


function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return `${month}/${day}/${year}`;
}


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className='nhj-1'>
        <h1 style={{ fontStyle: 'bold', fontSize: '40px' }}>Smart Contact Manager</h1>
        <div id='myForm'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p id='Date'> {formatDate(dateTime)}</p>
            <p id='Time'> {dateTime.toLocaleTimeString()}</p>
          </div>
          <div className='card-input'>
            <label className='card-input__label' htmlFor='dropdown' style={{ fontWeight: 'bolder' }}>Freo Id:</label>
            <select
              className='card-input__input'
              name='dropdown'
              style={{ width: '93%' }}
              value={selectedOption}
              required
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className='card-input'>
            <label htmlFor='Reference' className='card-input__label' style={{ fontWeight: 'bolder' }}>Reference_id:</label>
            <input required className='card-input__input ddc' style={{ width: "40%" }} type='text' id='Reference' name='Reference' /><br /><br />
          </div>



          <div className="card-input">
                     <label className="card-input__label" htmlFor="dropdown"  style={{fontWeight: 'bolder'}}>Dispossition:</label>
                     <select required  className="card-input__input" id="dropdown" name="dropdown" style={{width: "93%"}}>
                     <option value="">Select Dispossition</option>
                         <option value="Abusive Cx">Abusive Cx</option>
                         <option value="Busy">Busy</option>
                         <option value="Call Back">Call Back</option>
                         {/* <option value="Call Me Later">Call Me Later</option> */}
                         <option value="Complete">Complete</option>
                         <option value="Customer Disconnect call">Customer Disconnect call</option>
                         {/* <option value="Customer is saying that I haven't applied for any loan">Customer is saying that I haven't applied for any loan</option> */}
                         <option value="Esclate">Esclate</option>
                         <option value="Incoming Call Is Not Available">Incoming Call Is Not Available</option>
                         <option value="Language Barrier">Language Barrier</option>
                         <option value="Reject Id">Reject Id</option>
                         <option value="Not Interested">Not Interested</option>
                         {/* <option value="Out Of Range">Out Of Range</option> */}
                         <option value="Out Of Service">Out Of Service</option>
                         <option value="RNR">RNR</option>
                         <option value="Switch Off">Switch Off</option>
                         <option value="Wrong Number">Wrong Number</option>
                         {/* <option value="Not Interested">Not Interested</option> */}
                         <option value="ringing busy">ringing busy</option>
                     </select><br/><br/>
                 </div>
                 <div className="card-input" >
                     <label className="card-input__label" htmlFor="remark" style={{fontWeight: 'bolder'}}>Remark:</label>
                     <input required type="text" className="card-input__input ddc"  style={{width: "40%"}} id="remark2"  name="Remark"/><br/><br/>
                     {/* <input className=" fgh-1" type="submit" value="Submit"/> */}
                 </div>


          <input className='fgh-1' id='sendBtn' type='submit'  onClick={sendDataToAPI} value='Submit' />
        </div>
      </div>
    </div>
  );
}

export default SmartContactManager;

