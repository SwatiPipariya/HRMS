import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, FormControl, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const CandidatesList = () => {
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ratingModal, setRatingModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  // ------------------------------------------------------------
  // const [showOnlyNotFilled, setShowOnlyNotFilled] = useState(false); // New state variable
  // const [showTable, setShowTable] = useState(false);

  // const toggleTable = () => {
  //   setShowTable(!showTable);
  // };
  //  -----------------------------------------------------------------------------------
  useEffect(() => {
    fetchCandidates();
    // fetchUsers(); 

  }, []);

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

  console.log(candidates);

  const fetchCandidates = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/candidates'); // Adjust the endpoint as needed
      setCandidates(response.data);
      console.log(response.data)
      setFilteredCandidates(response.data);
      firstRound();
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const firstRound = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/firstround/and/candidates/details'); // Adjust the endpoint as needed
      console.log("candidate 1st round data "+ response.data)
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };


  const handleUserSelect = (e) => {
    console.log(e.target.value)
    setSelectedUser(e.target.value);
  };

  const handleSearch = () => {
    const filtered = candidates.filter(candidate =>
      (candidate.fullName && candidate.fullName.toLowerCase().includes(searchInput.toLowerCase())) ||
      (candidate.status && candidate.status.toLowerCase().includes(searchInput.toLowerCase()))
    );
    setFilteredCandidates(filtered);
  };

  const openModal = (candidate) => {
    setSelectedCandidate(candidate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCandidate(null);
    setModalIsOpen(false);
  };


  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.2.11:5050/first/round', {
        ratings: ratings,
        remark: document.getElementById('dsc').value,
        // selectedUser: selectedUser,
        assignedTo: (selectedUser?.split('-')?.[0]),
        department: (selectedUser?.split('-')?.[1]),

        candidateName: document.getElementById('openModelCandidateName').innerHTML,
        candidateDOB: document.getElementById('openModelCandidateDOB').innerHTML,
        candidateFatherName: document.getElementById('openModelCandidateFatherName').innerHTML,
        assignedBy: localStorage.getItem('username')
      });
      console.log(response.data); // Assuming you want to log the response
      window.location.reload();

      // Reset state or close modal or any other action upon successful submission
    } catch (error) {
      console.error('Error submitting ratings:', error);
      // Handle error
    }
  };

  //  ---------------------------------------------------------------------------------------------------------------------

  // View All Candidates

  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };
  
  // -----------------------------------------------------------------------------------------------------------------------

  return (
    <div style={{ paddingLeft: '65px' }}>
      <h2>Candidate List</h2>
      <div>
        <FormControl
          type="text" style={{ border: '.5px solid gray', borderRadius: '5px' }}
          placeholder="Search by Name or Status"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='uyhyy' style={{ padding: '5px 10px ', margin: '20px' }} onClick={handleSearch}>Search</Button>

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
      {/* -----------------------------------New One------------------------------------------------------ */}
      
      {/* View All Candidates */}
      <div>
      <button onClick={toggleTable} className='hdsefsq'>View All Candidates</button>
      {showTable && (
        <table>
          <thead>
            <tr >
              <th className='kgfv'>Name</th>
              <th className='kgfv'>Phone No.</th>
              <th className='kgfv'>Post</th>
              <th className='kgfv' style={{ textAlign: 'end' }}>Time</th>
              <th className='kgfv' style={{ textAlign: 'end' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr> */}
            {/* Add more rows as needed */}
            {filteredCandidates.map(candidate => (
            <tr key={candidate.id} onClick={() => openModal(candidate)}>
              <td>{candidate.fullName}</td>
              <td style={{ color: 'gray' }}>{candidate.phoneNo}</td>
              {/* <td style={{ color: 'gray' }}>{candidate.email}</td> */}
              <td style={{ color: 'gray' }}>{candidate.ApplyedFor}</td>
              {/* <td style={{ color: 'gray' }}>{candidate.correspondenceAddress}</td> */}
              {/* <td style={{ color: '#0c0c0cc9' }} className={`stat-btn ${candidate.status === 'Selected' ? 'green-button' : candidate.status === 'On Hold' ? 'yellow-button' : candidate.status === ' Rejected' ? 'red-button' :
                candidate.status === ''}`}>{candidate.status}</td> */}
              {/* <button >  {candidate.status} </button> */}
              <td style={{ color: 'gray', textAlign: 'end' }}>{candidate.time}</td>
              <td style={{ color: 'gray', textAlign: 'end' }}>{candidate.date}</td>

            </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
      {/* ----------------------------------------------------------------------------------------- */}

{/*    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Post</th>
            <th style={{ textAlign: 'end' }}>Time</th>
            <th style={{ textAlign: 'end' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map(candidate => (
            <tr key={candidate.id} onClick={() => openModal(candidate)}>
              <td>{candidate.fullName}</td>
              <td style={{ color: 'gray' }}>{candidate.phoneNo}</td>
              <td style={{ color: 'gray' }}>{candidate.ApplyedFor}</td>
              <td style={{ color: 'gray', textAlign: 'end' }}>{candidate.time}</td>
              <td style={{ color: 'gray', textAlign: 'end' }}>{candidate.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>  */}

      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            width: '500px',
            height: '500px',
            margin: 'auto',
            overflowY: 'scroll'
          }
        }}
      >
        {selectedCandidate && (
          <div>
            <div>
              <h2>Candidate Details</h2>
              <h4> Source: <span>{selectedCandidate.source}</span></h4>
              <p>Source Name: <span>{selectedCandidate.sourceName}</span></p>
              <p>Date of 1st Interview: <span>{selectedCandidate.dateOfFirstInterview}</span></p>
              <p>Candidate Visit At: <span>{selectedCandidate.date}</span></p>
            </div>

            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Personal Details</h3>

            <div>
              <h6 > Name: <span id='openModelCandidateName'>{selectedCandidate.fullName}</span></h6>
              <p>Age: <span>{selectedCandidate.age}</span></p>
              <p >Date of Birth: <span id='openModelCandidateDOB'>{selectedCandidate.dob}</span></p>
              {/* <p>Place of Birth: <span>{selectedCandidate.placeOfBirth}</span></p> */}
              <p >Father's Name: <span id='openModelCandidateFatherName'>{selectedCandidate.fatherName}</span></p>
              <p>Correspondence Address: <span>{selectedCandidate.correspondenceAddress}</span></p>
              <p>Permanent Address: <span>{selectedCandidate.permanentAddress}</span></p>
              <p>Phone Number: <span>{selectedCandidate.phoneNo}</span></p>
              <p>Email: <span>{selectedCandidate.email}</span></p>
              {/* <p>10th Percentage: <span>{selectedCandidate.tenthPercentage}</span></p> */}
              {/* <p>12th Percentage: <span>{selectedCandidate.twelfthPercentage}</span></p> */}
              {/* <p>Graduation: <span>{selectedCandidate.graduation}</span></p> */}
              {/* <p>Post Graduation: <span>{selectedCandidate.pg}</span></p> */}
              <p> Qualification: <span>{selectedCandidate.Qualification}</span></p>
            </div>


            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Work Experience</h3>

            <div>
              <p>Work Experience : <span>{selectedCandidate.workExperience}</span></p>

              <p>Organization: <span>{selectedCandidate.workExperienceOrganization}</span></p>
              <p>Position: <span>{selectedCandidate.workExperiencePosition}</span></p>
              {/* <p>Responsibilities: <span>{selectedCandidate.workExperienceResponsibilities}</span></p> */}
              <p>From: <span>{selectedCandidate.workExperienceFrom}</span></p>
              <p>To: <span>{selectedCandidate.workExperienceTo}</span></p>
              <p>Reason for Leaving: <span>{selectedCandidate.workExperienceReasonForLeaving}</span></p>
            </div>

            <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Additional Details</h3>

            <div>
              <p>Time Required for Joining: <span>{selectedCandidate.timeRequiredForJoining}</span></p>
              <p>Current CTC: <span>{selectedCandidate.currentCTC}</span></p>
              <p>Expected CTC: <span>{selectedCandidate.expectedCTC}</span></p>
              {/* <p>Status: <span>{selectedCandidate.status}</span></p> */}
              {/* <p>1st Interviewer Name: <span>{selectedCandidate.interviewerName}</span></p> */}
              <a href={selectedCandidate.url} style={{ cursor: 'pointer', backgroundColor: 'green', padding: '5px 10px', color: 'white' }} target='_blank'>See Resume</a>
            </div>
          </div>
        )}
        {/* <Button style={{display:'none'}} onClick={closeModal}>Close</Button> */}
        <div className='ewdf414'>
          <Button className='epicOne' onClick={() => setRatingModal(true)}>Remarks</Button>
        </div>

      </Modal>

      <Modal
        isOpen={ratingModal}
        onRequestClose={() => setRatingModal(false)}
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
          <form className="space-y-4" onSubmit={() => { }}>
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
                  onChange={handleUserSelect}
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
              <div className='ewdf414'>


                <button type="button" className='uyhyy epicOne' onClick={handleSubmit}>Submit</button>
              </div>
            </div>

          </form>
        </div>


      </Modal>
    </div>
  );
};

export default CandidatesList;