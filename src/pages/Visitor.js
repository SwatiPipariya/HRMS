// import React, { useState } from 'react';
// import axios from 'axios';
// import TimeAndDate from '../components/calander/TimeAndDate'
// const Visitor = () => {
//   // const [dateAndTime, setDateAndTime] = useState('');
//   const [name, setName] = useState('');
//   const [reason, setReason] = useState('');
//   const [approvedBy, setApprovedBy] = useState('');
//   const [attendedBy, setAttendedBy] = useState('');
//   const [itemCount, setItemCount] = useState(['1'])

// // const DAT = () => {
// //   setDateAndTime = localStorage.getItem('DateAndTime')
// // }

//   const handleNameChange = (e) => {
//     setName(e.target.value);
    
//   };

//   const handleReasonChange = (e) => {
//     setReason(e.target.value);
//   };

//   const handleApprovedByChange = (e) => {
//     setApprovedBy(e.target.value);
//     // DAT();
//   };

//   const handleAttendedByChange = (e) => {
//     setAttendedBy(e.target.value);

//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://192.168.2.11:5050/visitor', {
//         // dateAndTime,
//         name,
//         reason,
//         approvedBy,
//         attendedBy,
//       });

//       if (response.status === 200) {
//         console.log('Visitor data submitted successfully');
//         // Reset form fields after successful submission
//         setName('');
//         setReason('');
//         setApprovedBy('');
//         setAttendedBy('');
//       } else {
//         console.error('Failed to submit visitor data');
//         // Handle error as needed
//       }




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TimeAndDate from '../components/calander/TimeAndDate';

const Visitor = () => {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');
  const [approvedBy, setApprovedBy] = useState('');
  const [attendedBy, setAttendedBy] = useState('');
  const [itemCount, setItemCount] = useState([{}]);
  const [feedback, setFeedback] = useState('');
  const [dateAndTime, setDateAndTime] = useState('');

  // Load date and time from localStorage on component mount
  useEffect(() => {
    const storedDateAndTime = localStorage.getItem('DateAndTime');
    if (storedDateAndTime) {
      setDateAndTime(storedDateAndTime);
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleApprovedByChange = (e) => {
    setApprovedBy(e.target.value);
  };

  const handleAttendedByChange = (e) => {
    setAttendedBy(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://192.168.2.11:5050/visitor', {
        name,
        reason,
        approvedBy,
        attendedBy,
        itemCount: JSON.stringify(itemCount),
        feedback,
        dateAndTime,
      });

      if (response.status === 200) {
        console.log('Visitor data submitted successfully');
        // Reset form fields after successful submission
        setName('');
        setReason('');
        setApprovedBy('');
        setAttendedBy('');
        setItemCount(['1']);
        setFeedback('');
      } else {
        console.error('Failed to submit visitor data');
        // Handle error as needed
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">

        <h1>Visitor Form</h1>
        <TimeAndDate/>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">Reason for visiting</label>
          <select
            id="reason"
            value={reason}
            onChange={handleReasonChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Reason</option>
            <option value="Interview">Interview</option>
            <option value="Water Supplier">Water Supplier</option>
            <option value="Client">Client</option>
            <option value="Electrician">Electrician</option>
            <option value="Vendor">Vendor</option>
            <option value="Family">Family</option>
            <option value="Friends">Friends</option>
            <option value="Others">Others</option>
          </select>
        </div>



        

        {reason==='Vendor' && <>
        
          <label htmlFor="approvedBy" className="block text-gray-700 text-sm font-bold mb-2">Item Received</label>
          {
          itemCount?.map((x,i)=> <div className="mb-4">
            <div>{i+1}</div>
            <input
            type="text"
            // id="approvedBy"
            // value={approvedBy}
            // onChange={handleApprovedByChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Item Name"
            onChange={(e)=>{
              const temp = itemCount;
              temp[i].name = e.target.value
              setItemCount(temp)
            }}
            required
            />
            <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Item Count"
            onChange={(e)=>{
              const temp = itemCount;
              temp[i].count = e.target.value
              setItemCount(temp)
            }}
            required
            />
        </div>)
          }

          <div onClick={()=>{
            console.log(itemCount)
            setItemCount([...itemCount, {}])
          }}>Item +</div>

        <div className="mb-4">
          <label htmlFor="approvedBy" className="block text-gray-700 text-sm font-bold mb-2">Vendor Name</label>
          <input
            type="text"
            // id="approvedBy"
            // value={approvedBy}
            // onChange={handleApprovedByChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Vendor Name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="approvedBy" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
          <input
            type="text"
            // id="approvedBy"
            // value={approvedBy}
            // onChange={handleApprovedByChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Department"
            required
          />
        </div></>}

        <div className="mb-4">
          <label htmlFor="approvedBy" className="block text-gray-700 text-sm font-bold mb-2">Approved By</label>
          <input
            type="text"
            id="approvedBy"
            value={approvedBy}
            onChange={handleApprovedByChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Approver's Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="attendedBy" className="block text-gray-700 text-sm font-bold mb-2">Attended By</label>
          <input
            type="text"
            id="attendedBy"
            value={attendedBy}
            onChange={handleAttendedByChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Attendant's Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="approvedBy" className="block text-gray-700 text-sm font-bold mb-2">Feedback</label>
          <input
            type="text"
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Approver's Name"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Visitor;
