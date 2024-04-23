

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { Table, FormControl, Button } from 'react-bootstrap';
import Modal from 'react-modal';


function AddCandidate() {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [formData, setFormData] = useState({
    source: '',
    sourceName: '',
    dateOfFirstInterview: '',
    date:'',
    fullName: '',
    age: '',
    dob: '',
    // placeOfBirth: '',
    fatherName: '',
    correspondenceAddress: '',
    permanentAddress: '',
    phoneNo: '',
    email: '',
    // tenthPercentage: '',
    // twelfthPercentage: '',
    // graduation: '',
    // pg: '',
    // otherQualification: '',    Quaification
    // vocationalTrainingOrganization: '',
    // vocationalTrainingLocation: '',
    // vocationalTrainingProjectTopic: '',
    // vocationalTrainingPeriod: '',
    Qualification:'',
    workExperienceOrganization: 'NA',
    // Department: '',
    workExperienceDepartment:'NA',
    workExperiencePosition: 'NA',
    // workExperienceResponsibilities: '',
    workExperienceFrom: 'NA',
    workExperienceTo: 'NA',
    workExperienceReasonForLeaving: 'NA',
    timeRequiredForJoining: '',
    currentCTC: '',
    expectedCTC: '',
    interviewerName: '',
    // status: '',
    workExperience: '',
  });

  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');
  const [userExist, setUserExist] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ratings, setRatings] = useState({

    verbalCommunication: 5,
    writtenCommunication: 5,
    activeListening: 5,

    teamCollaboration: 5,
    relationshipBuilding: 5,
    conflictResolution: 5,

    flexibility: 5,
    willingnessToLearn: 5,
    abilityToHandleChange: 5,

    analyticalThinking: 5,
    criticalReasoning: 5,
    decisionMaking: 5,
    
    alignmentWithValues: 5,
    culturalFit: 5,
    commitmentToMission: 5,


    workEthic: 5,
    integrity: 5,
    accountability: 5,



    selfAwareness: 5,
    empathy: 5,
    relationshipManagement: 5,
  
    proactiveness: 5,
    willingnessForResponsibilities: 5,

    conflictResolutionAbility: 5,
    constructiveFeedback: 5,

    // culturalAwareness: 5,

    sensitivityToDiversity: 5,
    understandingOfGlobalPerspectives: 5,

    presentationSkills: 5,
  });




  const handleRatingChange = (fieldName, value) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [fieldName]: value
     
    }));
  };


// const handleRatingChange = (fieldName, value) => {
//   setRatings({
//     ...ratings,
//     // candidateName: document.getElementById('fullName').value,
//     candidateName: formData.fullName,
//     candidateDOB: document.getElementById('dob').value,
//     candidateFatherName: document.getElementById('fatherName').value,
//     Remarks: document.getElementById('dsc').innerHTML,
//     [fieldName]: value
//   });
// };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      // date:localStorage.getItem('DateAndTime'),
      // dateOfFirstInterview:localStorage.getItem('DateAndTime'),
      age: name === 'dob' ? calculateAge(value) : prevData.age,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;

    setFile(selectedFile);
  };

  const handleUserSelect = (e) => {
    console.log(e.target.value)
    setSelectedUser(e.target.value);
  };

  const workExperienceElement = document.getElementById('workExperience');

  if (workExperienceElement) {
    // Access the value of the 'workExperience' element
    const workExperience = workExperienceElement.value;

    // Check if the value is 'Yes'
    if (workExperience === 'Exprienced') {
      // Get the element with ID 'onlyExperienced'
      const onlyExperienced = document.getElementById('onlyExperienced');

      // Check if the element with ID 'onlyExperienced' exists
      if (onlyExperienced) {
        // Set the display style to 'block'
        onlyExperienced.style.display = 'flex';
        // display: 'flex', justifyContent: 'space-between', padding: '0px 20px'
        onlyExperienced.style.justifyContent = 'space-between';
        onlyExperienced.style.padding = '0px 20px';
        onlyExperienced.style.flexWrap = 'wrap';
        onlyExperienced.style.gap = '5px';
      }
    } else if (workExperience === 'Fresher') {
      // Get the element with ID 'onlyExperience
      const onlyExperienced = document.getElementById('onlyExperienced');

      // Check if the element with ID 'onlyExperienced' exists
      if (onlyExperienced) {
        // Set the display style to 'block'
        onlyExperienced.style.display = 'none';
      }
    }
  }



  useEffect(() => {
    // Set up a Socket.IO connection
    // const socket = io('http://192.168.2.11:5050');

    // socket.on('connect', () => {
    //     console.log('Connected to socket');
    // });

    // socket.on('newInterview', (data) => {
    //     console.log('New interview added:', data.message);
    //     // Handle the new interview data as needed
    // });

    // return () => {
    //     // Clean up the socket connection when the component unmounts
    //     socket.disconnect();
    // };


    // const socket = io('http://192.168.2.11:5050');

    // socket.on('connect', () => {
    //     console.log('Connected to socket');
    // });
    
    // socket.on('newInterview', (data) => {
    //     console.log('New interview added:', data.message);
    // });
    
    // socket.on('disconnect', () => {
    //     console.log('Disconnected from socket');
    // });
    
}, []);



  const handleSubmit = async (e) => {

    // e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make a POST request using Axios
      const response = await axios.post('http://192.168.2.11:5050/first/round', {...ratings, candidateName: formData.fullName,
      candidateFatherName: formData.fatherName,
      candidateDOB: formData.dob,
      assignedBy : localStorage.getItem('username'),
      remark: document.getElementById('dsc')?.value,
      assignedTo:(selectedUser?.split('-')?.[0]),
      department:(selectedUser?.split('-')?.[1])
    })

      // Handle response, for example, show a success message or redirect
      console.log('Response:', response.data);
      alert();
      // window.location.href = window.location.href;
        } catch (error) {
      // Handle errors, for example, show an error message
      console.error('Error:', error);
    }
  };



  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If the current month is before the birth month or if it's the same month but the current day is before the birth day
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }


  const handleCheck = () => {
    axios.post('http://192.168.2.11:5050/checkcandidate', formData).then(res => {
      setUserExist(res.data)
    })
  }
  useEffect(() => {
    axios
      .get("http://192.168.2.11:5050/users")
      .then((response) => {
        const fetchedData = response.data;
        setUserList(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const uploadFile = () => {
    if (!file) {
      alert('Please choose a file.');
      return;
    }

    const formDataToSend = new FormData();


    // const formData = new FormData();

    // Append all fields from the "formData" state
    // Object.entries(formData).forEach(([fieldName, value]) => {
    //     formData.append(fieldName, value);
    // });

    // Append all fields from the "formData" state
    Object.entries(formData).forEach(([fieldName, value]) => {
      console.log(fieldName, value)
      formDataToSend.append(fieldName, value);
    });

    formDataToSend.append('file', file);

    // const formDataObject = {};
    // formData.forEach((value, key) => {
    //     formDataObject[key] = value;
    // });
    // console.log(JSON.stringify(formDataObject));

    axios.post('http://192.168.2.11:5050/candidateWithResume', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })



      .then(response => {
        // Handle the response
        console.log(response.data);
        setResponse(`File uploaded successfully! ${response.data.message}`);
        handleSubmit();
        window.location.reload();

      })
      .catch(error => {
        // Handle errors
        console.error(error);
        setResponse(`Error uploading file: ${error.response ? error.response.data.error : 'Unknown error'}`);
      });



      
  };


  return (
    <div style={{ marginLeft: '70px', display: 'flex', justifyContent: 'center', paddingRight: '70px' }}>

      <div style={{ width: '80%', height: 'max-content' }}>

        <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Basic Details</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px     ' }}>

          <div className="input-group" style={{ width: '30%' }}>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName " className='hghgch' name="fullName" required onChange={handleChange} required />
          </div>
          <div className="input-group" style={{ width: '30%' }}>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob " className='hghgch' name="dob" required onChange={handleChange} required />
          </div>
          <div className="input-group" style={{ width: '30%' }}>
            <label htmlFor="fatherName">Father's Name:</label>
            <input type="text" id="fatherName  " className='hghgch' required name="fatherName" onChange={handleChange} required />
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={handleCheck}>Submit Candidate</button>
        </div>


        {/* <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Swich to Second Attempt</button> */}
        {userExist && !userExist.exists && <>
          <span style={{ color: 'green' }}> This Candidate is new</span>
          <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>File Upload Form</h1>
          <div className="abc">

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px     ' }}>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="source">Source:</label>
                <select className='hghgch' id="source" name="source" onChange={handleChange} required>
                  <option value="">Select an option</option>
                  <option value="Campus/College">Campus/College</option>
                  <option value="Employee referral">Employee referral</option>
                  <option value="Hiring Counselor">Hiring Counselor</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Job Portal">Job Portal</option>
                  <option value="Walkin">Walkin</option>
                </select>
              </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="sourceName">Source Name:</label>
                <input className='hghgch' type="text" id="sourceName" name="sourceName" onChange={handleChange} required />
              </div>
        
            </div>
            {/* ..................................................................... */}
            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Personal Details</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px     ' }}>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age " className='hghgch' name="age" readOnly onChange={handleChange} value={formData.age} />

              </div>

              {/* <div className="input-group" style={{ width: '20%' }}>
                            <label htmlFor="placeOfBirth">Place of Birth:</label>
                            <input type="text" id="placeOfBirth " className='hghgch' name="placeOfBirth" onChange={handleChange} required />
                        </div> */}



              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="correspondenceAddress">Correspondence Address:</label>
                <input id="correspondenceAddress " className='hghgch' name="correspondenceAddress" onChange={handleChange} required />                  </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="permanentAddress">Permanent Address:</label>
                <input id="permanentAddress " className='hghgch' name="permanentAddress" onChange={handleChange} required />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px     ' }}>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="tel" id="phoneNo " className='hghgch' name="phoneNo" onChange={handleChange} required />
              </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email " className='hghgch' name="email" onChange={handleChange} required />


              </div>
              {/* <div className="input-group" style={{ width: '20%' }}>
                            <label htmlFor="tenthPercentage">10th Percentage:</label>
                            <input type="text" id="tenthPercentage " className='hghgch' name="tenthPercentage" onChange={handleChange} required />
                        </div>
                        <div className="input-group" style={{ width: '20%' }}>
                            <label htmlFor="twelfthPercentage">12th Percentage:</label>
                            <input type="text" id="twelfthPercentage " className='hghgch' name="twelfthPercentage" onChange={handleChange} required />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 20px' }}>
                        <div className="input-group" style={{ width: '30%' }}>
                            <label htmlFor="graduation">Graduation:</label>
                            <input type="text" id="graduation " className='hghgch' name="graduation" onChange={handleChange} />
                        </div>
                    <div className="input-group"  style={{width:'30%'}}>
                        <label htmlFor="pg">Post Graduation:</label>
                        <input type="text" id="pg " className='hghgch' name="pg" onChange={handleChange} />
                    </div> */}
              {/* <div className="input-group"  style={{width:'30%'}}>
                        <label htmlFor="otherQualification">Qualification:</label>
                        <input type="text" id="otherQualification " className='hghgch' name="otherQualification" onChange={handleChange} />
                    </div> */}
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="Qualification">Qualification:</label>
                <select className='hghgch' id="Qualification" name="Qualification" onChange={handleChange} required>
                  <option value="">Select an option</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="UG">UG</option>
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                </select>
              </div>
            </div>
            {/* Vocational Training Section */}
            {/* <h3 style={{fontWeight:'bold',fontSize:'25px'}}>Vocational Training</h3>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingOrganization">Organization:</label>
                         <input type="text" id="vocationalTrainingOrganization " className='hghgch' name="vocationalTrainingOrganization"  onChange={handleChange} />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingLocation">Location:</label>
                         <input type="text" id="vocationalTrainingLocation " className='hghgch' name="vocationalTrainingLocation"  onChange={handleChange} />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingProjectTopic">Project Topic:</label>
                         <input type="text" id="vocationalTrainingProjectTopic " className='hghgch' name="vocationalTrainingProjectTopic"  onChange={handleChange}  />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingPeriod">Period:</label>
                         <input type="text" id="vocationalTrainingPeriod " className='hghgch' name="vocationalTrainingPeriod"  onChange={handleChange}  />
                     </div> */}

            {/* Work Experience Section */}
            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Work Experience</h3>
            <div className="input-group">
              <label htmlFor="workExperience">Work Experience:</label>
              <select className='hghgch' id="workExperience" name="workExperience" value={formData.workExperience} onChange={handleChange} required>
                <option value="">Select an option</option>

                <option value="Fresher">Fresher</option>
                <option value="Exprienced">Experienced</option>
              </select>
            </div>

            <div id='onlyExperienced'  >

              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperienceOrganization">Organization:</label>
                <input type="text" id="workExperienceOrganization " className='hghgch' name="workExperienceOrganization" onChange={handleChange} />
              </div>
              {/* <div className="input-group">
                            <label htmlFor="workExperiencePosition">Position:</label>
                            <input type="text" id="workExperiencePosition " className='hghgch' name="workExperiencePosition" onChange={handleChange} />
                        </div> */}
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperienceDepartment">Department:</label>
                <select className='hghgch' id="workExperienceDepartment" name="workExperienceDepartment" onChange={handleChange} required>
                  <option value="">Select an option</option>
                  <option value="IT">IT</option>
                  <option value="Adminitrator">Adminitrator</option>
                  <option value="Operation">Operation</option>
                  <option value="Quality">Quality</option>
                  <option value="Tranning">Tranning</option>
                  <option value="WFM">WFM</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Finance">Finance</option>
                  <option value="Management">Management</option>
                  <option value="HR">HR</option>
                  <option value="Salse">Salse</option>
                </select>
              </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperiencePosition">Position:</label>
                <select className='hghgch' id="workExperiencePosition" name="workExperiencePosition" onChange={handleChange} required>
                  <option value="">Select an option</option>
                  <option value="Agent">Agent</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="SME">SME</option>
                  <option value="Team Leader">Team Leader</option>
                  <option value="Sr. Team Leader">Sr. Team Leader</option>
                  <option value="Assistant Manager">Assistant Manager</option>
                  <option value="Sr. Operations Manager">Sr. Operations Manager</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="IT Executive">IT Executive</option>
                  <option value="Desktop Engineer">Desktop Engineer</option>
                  <option value="Network Engineer">Network Engineer</option>
                  <option value="HR Executive">HR Executive</option>
                  <option value="HR lead">HR lead</option>
                  <option value="HR Recruter">HR Recruter</option>
                  <option value="HR Asistant Manager">HR Asistant Manager</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="Admin Executive">Admin Executive</option>
                  <option value="Admin Lead">Admin Lead</option>
                  <option value="House Keeping">House Keeping</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Office Boy">Office Boy</option>
                  <option value="Office Girl">Office Girl</option>
                  <option value="Security Gaird">Security Gaird</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Salse Executive">Salse Executive</option>
                  <option value="MIS Executive">MIS Executive</option>
                  <option value="Digital Marketing Lead">Digital Marketing Lead</option>
                  <option value="Content Writer">Content Writer</option>

                </select>
              </div>
             
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperienceFromDate">From:</label>
                <input type="date" id="workExperienceFromDate " className='hghgch' name="workExperienceFrom" onChange={handleChange} />
              </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperienceToDate">To:</label>
                <input type="date" id="workExperienceToDate " className='hghgch' name="workExperienceTo" onChange={handleChange} />
              </div>
              <div className="input-group" style={{ width: '20%' }}>
                <label htmlFor="workExperienceReasonOfLeaving">Reason for Leaving:</label>
                <input type="text" id="workExperienceReasonOfLeaving " className='hghgch' name="workExperienceReasonForLeaving" onChange={handleChange} />
              </div>
            </div>

            {/* Additional Details Section */}
            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Additional Details</h3>
            <div className='grid grid-cols-4 gap-4'>
              <div className="input-group">
                <label htmlFor="timeRequiredForJoining">Time Required for Joining:</label>
                <input type="text" id="timeRequiredForJoining " className='hghgch' name="timeRequiredForJoining" onChange={handleChange} />                     </div>
              <div className="input-group">
                <label htmlFor="currentCTC">Current CTC:</label>
                <input type="text" id="currentCTC " className='hghgch' name="currentCTC" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="expectedCTC">Expected CTC:</label>
                <input type="text" id="expectedCTC " className='hghgch' name="expectedCTC" onChange={handleChange} />
              </div>

           

              <div className="input-group">
                <label htmlFor="interviewerName"> 1st Interviewer Name</label>
                <input type="text" id="interviewerName " className='hghgch' name="interviewerName" onChange={handleChange} />
              </div>

              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date " className='hghgch' name="date" onChange={handleChange} />
              </div>

              <div className="input-group">
                <label htmlFor="dateOfFirstInterview">Date Of 1st Interview</label>
                <input type="date" id="dateOfFirstInterview " className='hghgch' name="dateOfFirstInterview" onChange={handleChange} />
              </div>
            </div>
            
            
            </div>

          <form encType="multipart/form-data">
            <label htmlFor="fileInput">Choose a file:</label>
            <input type="file" id="fileInput" name="file" onChange={handleFileChange}  />
            <br />
            <button type="button" className='uyhyy ' onClick={uploadFile}>Upload</button>
          </form>
        </>}

        {userExist && userExist.exists && <>
          <span style={{ color: 'red' }}> This Candidate Already Exist</span>
          <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>Secont Attempt Form</h1>
          <div className="abc"  >

            <div className='grid grid-cols-4 gap-4'>
              <div className="input-group">
                <label htmlFor="source">Source:</label>
                <select className='hghgch' id="source" name="source" onChange={handleChange} required>
                  <option value="">Select an option</option>
                  <option value="Campus/College">Campus/College</option>
                  <option value="Employee referral">Employee referral</option>
                  <option value="Hiring Counselor">Hiring Counselor</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Job Portal">Job Portal</option>
                  <option value="Walkin">Walkin</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="sourceName">Source Name:</label>
                <input className='hghgch' type="text" id="sourceName" name="sourceName" onChange={handleChange} required />
              </div>
            
            </div>
            {/* ..................................................................... */}


            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Personal Details</h3>

            <div className='grid grid-cols-4 gap-4'>
              <div className="input-group">
                <label htmlFor="age">Age:</label>
                <input type="number" id="age " className='hghgch' name="age" onChange={handleChange} required />

              </div>

              {/* <div className="input-group">
                <label htmlFor="placeOfBirth">Place of Birth:</label>
                <input type="text" id="placeOfBirth " className='hghgch' name="placeOfBirth" onChange={handleChange} required />
              </div> */}



              <div className="input-group">
                <label htmlFor="correspondenceAddress">Correspondence Address:</label>
                <textarea id="correspondenceAddress " className='hghgch' name="correspondenceAddress" onChange={handleChange} required />                  </div>
              <div className="input-group">
                <label htmlFor="permanentAddress">Permanent Address:</label>
                <textarea id="permanentAddress " className='hghgch' name="permanentAddress" onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="tel" id="phoneNo " className='hghgch' name="phoneNo" onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email " className='hghgch' name="email" onChange={handleChange} required />


              </div>
             
              <div className="input-group">
                <label htmlFor="twelfthPercentage">12th Percentage:</label>
                <input type="text" id="twelfthPercentage " className='hghgch' name="twelfthPercentage" onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="graduation">Graduation:</label>
                <input type="text" id="graduation " className='hghgch' name="graduation" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="pg">Post Graduation:</label>
                <input type="text" id="pg " className='hghgch' name="pg" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="Qualification">Other Qualification:</label>
                <input type="text" id="Qualification " className='hghgch' name="Qualification" onChange={handleChange} />
              </div>
            </div>
          
            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Work Experience</h3>
            <div >
              <div className="input-group">
                <label htmlFor="workExperience">Work Experience:</label>
                <select className='hghgch' id="workExperience" name="workExperience" value={formData.workExperience} onChange={handleChange} required>
                  <option value="">Select an option</option>

                  <option value="Fresher">Fresher</option>
                  <option value="Exprienced">Experienced</option>
                </select>
              </div>

              <div id='onlyExperienced'>

                <div className="input-group">
                  <label htmlFor="workExperienceOrganization">Organization:</label>
                  <input type="text" id="workExperienceOrganization " className='hghgch' name="workExperienceOrganization" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="workExperiencePosition">Position:</label>
                  <input type="text" id="workExperiencePosition " className='hghgch' name="workExperiencePosition" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="workExperienceResponsibilities">Responsibilities:</label>
                  <textarea id="workExperienceResponsibilities " className='hghgch' name="workExperienceResponsibilities" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="workExperienceFromDate">From:</label>
                  <input type="date" id="workExperienceFromDate " className='hghgch' name="workExperienceFrom" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="workExperienceToDate">To:</label>
                  <input type="date" id="workExperienceToDate " className='hghgch' name="workExperienceTo" onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label htmlFor="workExperienceReasonOfLeaving">Reason for Leaving:</label>
                  <input type="text" id="workExperienceReasonOfLeaving " className='hghgch' name="workExperienceReasonForLeaving" onChange={handleChange} />
                </div>
              </div>
            </div>
            {/* Additional Details Section */}
            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Additional Details</h3>
            <div className='grid grid-cols-4 gap-4'>
              <div className="input-group">
                <label htmlFor="timeRequiredForJoining">Time Required for Joining:</label>
                <input type="text" id="timeRequiredForJoining " className='hghgch' name="timeRequiredForJoining" onChange={handleChange} />                     </div>
              <div className="input-group">
                <label htmlFor="currentCTC">Current CTC:</label>
                <input type="text" id="currentCTC " className='hghgch' name="currentCTC" onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="expectedCTC">Expected CTC:</label>
                <input type="text" id="expectedCTC " className='hghgch' name="expectedCTC" onChange={handleChange} />
              </div>

              <div className="input-group">
                <label htmlFor="status">Status:</label>
                <select className='hghgch' id="status" name="status" onChange={handleChange} required>
                  <option value="Selected">Selected</option>
                  <option value="On Hold">On Hold</option>
                  <option value=" Rejected"> Rejected</option>

                </select>
              </div>

              <div className="input-group">
                <label htmlFor="interviewerName"> 1st Interviewer Name</label>
                <input type="text" id="interviewerName " className='hghgch' name="interviewerName" onChange={handleChange} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="fileInput">Choose a file:</label>
            <input type="file" id="fileInput" name="file" onChange={handleFileChange} />
            <br />
          </div>
          <button type="button" className='uyhyy ' onClick={() => { setModalIsOpen(true) }}>Upload</button>
        </>}
      </div>

      {/* <div id="responseContainer">{response}</div> */}




      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            width: 'max-content',
            height: '80vh',
            margin: 'auto',
            overflowY: 'scroll'
          }
        }}
      >



<div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Skills Rating Form</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <h2>Communication Skills</h2>
              {Object.keys(ratings).slice(0, 3).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div>

            <div>
              <h2>Interpersonal Skills</h2>
              {Object.keys(ratings).slice(3, 6).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div>
            <div>
              <h2>Adaptability</h2>
              {Object.keys(ratings).slice(6, 9).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div><div>
              <h2>Problem-Solving Skills</h2>
              {Object.keys(ratings).slice(9, 12).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div>


            <div>
              <h2>Organizational Fit</h2>
              {Object.keys(ratings).slice(12, 15).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div><div>
              <h2>Professionalism</h2>
              {Object.keys(ratings).slice(15, 18).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div><div>
              <h2>Emotional Intelligence</h2>
              {Object.keys(ratings).slice(18, 21).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div>


           

            <div>
              <h2>Initiative</h2>
              {Object.keys(ratings).slice(21, 23).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div> <div>
              <h2>Conflict Resolution</h2>
              {Object.keys(ratings).slice(23, 25).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div> <div>
              <h2>Cultural Awareness</h2>
              {Object.keys(ratings).slice(25, 27).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div> <div>
              <h2>Presentation Skills</h2>
              {Object.keys(ratings).slice(27, 29).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div>

            {/* <div>
              <h2>Goal Alignment</h2>
              {Object.keys(ratings).slice(46, 48).map((fieldName) => (
                <div key={fieldName} className="flex items-center">
                  <label className="w-1/3">{fieldName}</label>
                  <input type="range" min="1" max="10" value={ratings[fieldName]} onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))} className="w-2/3" />
                  <span className="ml-2">{ratings[fieldName]}</span>
                </div>
              ))}
            </div> */}


            <div>
              <h2>Review</h2>
              <textarea id='dsc' style={{ width: '100%', height: '200px', backgroundColor: '#eeffee' }} />
              
            <div className="mb-4 flex items-center">
          <label htmlFor="userSelect" className="block mb-2 mr-2">
            Select User:
          </label>
          <select
            id="userSelect"
            value={selectedUser}
            onChange={ handleUserSelect}
            className="border rounded p-2 w-64"
          >
            <option value="">Select a User</option>
            {/* Assume userList is an array of available users */}
            {userList?.map((user) => (
              <option key={user.id} value={user.id} >
                {user.username}-{user.department}
              </option>
            ))}
          </select>
         
        </div>
              <button type="button" className='uyhyy' onClick={uploadFile}>save</button>
            </div>

          </form>
        </div>










      </Modal>
    </div>
  );
}

export default AddCandidate;