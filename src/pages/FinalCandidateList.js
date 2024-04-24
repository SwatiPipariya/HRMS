import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, FormControl } from 'react-bootstrap';
import Modal from 'react-modal';
import '.././App.css'
import { Link } from 'react-router-dom';
import FinalCandidateListHeader from './FinalCandidateListHeader';

const FinalCandidateList = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCandidate, setselectedCandidate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [remark, setRemark] = useState('');
  const [showCandidatesWithRemarks, setShowCandidatesWithRemarks] = useState(false);
  const [candidatesWithRemarks, setCandidatesWithRemarks] = useState([]);



  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/final/list/of/candidates'); // Adjust the endpoint as needed
      setClients(response.data);
      setFilteredClients(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filtered = clients.filter(client =>
      (client.ClientsName && client.ClientsName.toLowerCase().includes(searchInput.toLowerCase())) ||
      (client.ClientStatus && client.ClientStatus.toLowerCase().includes(searchInput.toLowerCase()))
    );
    setFilteredClients(filtered);
  };

  const openModal = (client) => {
    // console.log("hitting")
    setselectedCandidate(client);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setselectedCandidate(null);
    setRemark(''); // Clear remark when modal is closed
    setModalIsOpen(false);
  };

  // const handleSubmit = () => {
  //   console.log('Submit button clicked');
  //   console.log('Selected Candidate:', selectedCandidate);
  //   console.log('All Clients:', clients);
  //   console.log('Filtered Clients:', filteredClients);

  //   if (!selectedCandidate) {
  //     return; 
  //   }

  //   const { fullName, fatherName, dob } = selectedCandidate;

  //   const updatedClients = clients.filter(
  //     client =>
  //       client.fullName.toLowerCase() !== fullName.toLowerCase() ||
  //       client.fatherName.toLowerCase() !== fatherName.toLowerCase() ||
  //       client.dob !== dob
  //   );

  //   const updatedFilteredClients = filteredClients.filter(
  //     client =>
  //       client.fullName.toLowerCase() !== fullName.toLowerCase() ||
  //       client.fatherName.toLowerCase() !== fatherName.toLowerCase() ||
  //       client.dob !== dob
  //   );

  //   setClients(updatedClients);
  //   setFilteredClients(updatedFilteredClients);

  //   closeModal(); 
  // };

  // const toggleCandidatesWithRemarks = () => {
  //   setShowCandidatesWithRemarks(!showCandidatesWithRemarks);
  // };

  // const handleSubmitRemark = async () => {
  //   try {
  //     await axios.post('http://your-api-endpoint', {
  //       candidateId: selectedCandidate.id,
  //       remark: remark
  //     });
  //     setFilteredClients(prevClients => prevClients.filter(candidate => candidate.id !== selectedCandidate.id));
  //     setCandidatesWithRemarks(prevCandidates => [...prevCandidates, selectedCandidate]);
  //     closeModal();
  //   } catch (error) {
  //     console.error('Error submitting remark:', error);
  //   }
  // };

  const handleSubmitRemark = async () => {
    try {
      await axios.post('http://your-api-endpoint', {
        candidateId: selectedCandidate.id,
        remark: remark
      });
      setFilteredClients(prevClients => prevClients.filter(candidate => candidate.id !== selectedCandidate.id));
      setCandidatesWithRemarks(prevCandidates => [...prevCandidates, selectedCandidate]);
      closeModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting remark:', error);
    }
  };
  
  const openCandidateWithRemarks = () => {
    setFilteredClients(candidatesWithRemarks);
  };

  const closeCandidatesWithRemarks = () => {
    setShowCandidatesWithRemarks(false);
  };


  return (
    <div >
      {/* <h2>Final Candidate List</h2>
      <div>
        <FormControl
          type="text"
          style={{ border: '.5px solid gray', borderRadius: '5px' }}
          placeholder="Search by Name or Status"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='SearchModelButton' style={{ marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
      </div> */}
      {/* <div className='whson' > */}
      {/* <Button className='uqpvcen' onClick={openCandidateWithRemarks}>Candidates with Remarks</Button> */}
      {/* <Link className='qoxnd' to="/complete" >Complete</Link>
      <Link  className='uqpvcen'  to="/pending">Pending</Link> */}
      {/* </div> */}

      <FinalCandidateListHeader />
      <div style={{ marginLeft: '60px' }}>

      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Time</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(candidate => (
            <tr key={candidate.id} onClick={() => openModal(candidate)}>
              <td >{candidate.fullName}</td>
              <td style={{ color: 'gray' }}>{candidate.ApplyedDFor}</td>
              <td style={{ color: 'gray' }}>{candidate.time}</td>
              <td style={{ color: 'gray' }}>{candidate.date}</td>
              <td style={{ color: '#0c0c0cc9' }} className={`stat-btn ${candidate.status === 'Selected' ? 'green-button' : candidate.status === 'ON Hold' ? 'yellow-button' : candidate.status === 'Rejected' ? 'red-button' :
                candidate.status === ''}`}>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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
        <div className='jujhd'>
          <Button className='CloseModelButton' onClick={closeModal}>Close</Button>
          {/* <Button className='EditModelButton' onClick={closeModal}>Edit</Button> */}
        </div>

        {selectedCandidate && (
          <div>
            <h2>Final Candidate Details</h2>
            <h6>Name: <span id='openModelCandidateName'>{selectedCandidate.fullName}</span></h6>
            <p>Age: <span>{selectedCandidate.age}</span></p>
            <p >Date of Birth: <span id='openModelCandidateDOB'>{selectedCandidate.dob}</span></p>
            {/* <p>Place of Birth: <span>{selectedCandidate.placeOfBirth}</span></p> */}
            <p >Father's Name: <span id='openModelCandidateFatherName'>{selectedCandidate.fatherName}</span></p>
            <p>Correspondence Address: <span>{selectedCandidate.correspondenceAddress}</span></p>
            <p>Permanent Address: <span>{selectedCandidate.permanentAddress}</span></p>
            <p>Phone Number: <span>{selectedCandidate.phoneNo}</span></p>
            <p>Email: <span>{selectedCandidate.email}</span></p>
            <p>Status: <span>{selectedCandidate.status}</span></p>
            <p>Qualification: <span>{selectedCandidate.qualification}</span></p>
            <p>Work Experience Organization: <span>{selectedCandidate.workExperienceOrganization}</span></p>
            <p>Work Experience Position: <span>{selectedCandidate.workExperiencePosition}</span></p>
            <p>Work Experience From: <span>{selectedCandidate.workExperienceFrom}</span></p>
            <p>Work Experience To: <span>{selectedCandidate.workExperienceTo}</span></p>
            <p>Reason for Leaving Previous Job: <span>{selectedCandidate.workExperienceReasonForLeaving}</span></p>
            <p>Time Required for Joining: <span>{selectedCandidate.timeRequiredForJoining}</span></p>
            <p>Current CTC: <span>{selectedCandidate.currentCTC}</span></p>
            <p>Expected CTC: <span>{selectedCandidate.expectedCTC}</span></p>
            <p>Source: <span>{selectedCandidate.source}</span></p>
            <p>Source Name: <span>{selectedCandidate.sourceName}</span></p>
            <p>Date of First Interview: <span>{selectedCandidate.dateOfFirstInterview}</span></p>
            <p>Date: <span>{selectedCandidate.date}</span></p>
            <p>Interviewer Name: <span>{selectedCandidate.interviewerName}</span></p>
            <p style={{ margin: '30px 0px' }}>URL: <a href="{selectedCandidate.url}" target="_blank" style={{ padding: '10px 20px', border: '.5px solid black', borderRadius: '5px' }}>Resume</a></p>
            <p>Work Experience: <span>{selectedCandidate.workExperience}</span></p>
            <p>Applied For: <span>{selectedCandidate.ApplyedFor}</span></p>
            <p>Work Experience Department: <span>{selectedCandidate.workExperienceDepartment}</span></p>
            <p>Time: <span>{selectedCandidate.time}</span></p>
            <h2 style={{ margin: '30px 0px' }}>Round 1st details</h2>
            <p>Verbal Communication Skills: <span>{selectedCandidate.verbalCommunication}</span></p>
            <p>Written Communication Skills: <span>{selectedCandidate.writtenCommunication}</span></p>
            <p>Active Listening Skills: <span>{selectedCandidate.activeListening}</span></p>
            <p>Team Collaboration Skills: <span>{selectedCandidate.teamCollaboration}</span></p>
            <p>Relationship Building Skills: <span>{selectedCandidate.relationshipBuilding}</span></p>
            <p>Conflict Resolution Skills: <span>{selectedCandidate.conflictResolution}</span></p>
            <p>Flexibility: <span>{selectedCandidate.flexibility}</span></p>
            <p>Willingness to Learn: <span>{selectedCandidate.willingnessToLearn}</span></p>
            <p>Ability to Handle Change: <span>{selectedCandidate.abilityToHandleChange}</span></p>
            <p>Analytical Thinking: <span>{selectedCandidate.analyticalThinking}</span></p>
            <p>Critical Reasoning: <span>{selectedCandidate.criticalReasoning}</span></p>
            <p>Decision Making: <span>{selectedCandidate.decisionMaking}</span></p>
            <p>Alignment with Values: <span>{selectedCandidate.alignmentWithValues}</span></p>
            <p>Cultural Fit: <span>{selectedCandidate.culturalFit}</span></p>
            <p>Commitment to Mission: <span>{selectedCandidate.commitmentToMission}</span></p>
            <p>Work Ethic: <span>{selectedCandidate.workEthic}</span></p>
            <p>Integrity: <span>{selectedCandidate.integrity}</span></p>
            <p>Accountability: <span>{selectedCandidate.accountability}</span></p>
            <p>Self Awareness: <span>{selectedCandidate.selfAwareness}</span></p>
            <p>Empathy: <span>{selectedCandidate.empathy}</span></p>
            <p>Relationship Management: <span>{selectedCandidate.relationshipManagement}</span></p>
            <p>Proactiveness: <span>{selectedCandidate.proactiveness}</span></p>
            <p>Willingness For Responsibilities: <span>{selectedCandidate.willingnessForResponsibilities}</span></p>
            <p>Conflict Resolution Ability: <span>{selectedCandidate.conflictResolutionAbility}</span></p>
            <p>Constructive Feedback: <span>{selectedCandidate.constructiveFeedback}</span></p>
            <p>Cultural Awareness: <span>{selectedCandidate.culturalAwareness}</span></p>
            <p>Sensitivity To Diversity: <span>{selectedCandidate.sensitivityToDiversity}</span></p>
            <p>Understanding Of Global Perspectives: <span>{selectedCandidate.understandingOfGlobalPerspectives}</span></p>
            <p>Presentation Skills: <span>{selectedCandidate.presentationSkills}</span></p>
            <p>Candidate Name: <span>{selectedCandidate.candidateName}</span></p>
            <p>Candidate Date of Birth: <span>{selectedCandidate.candidateDOB}</span></p>
            <p>Candidate Father's Name: <span>{selectedCandidate.candidateFatherName}</span></p>
            <p>Remark: <span>{selectedCandidate.remark}</span></p>
            <p>Assigned To: <span>{selectedCandidate.assignedTo}</span></p>
            <p>Department: <span>{selectedCandidate.department}</span></p>
            <p>Assigned By: <span>{selectedCandidate.assignedBy}</span></p>
            <h2 style={{ margin: '30px 0px' }}>Round 2st details</h2>

            <p>Last Remarker Name: <span>{selectedCandidate.LastRemarkerName}</span></p>
            <p>Date and Time: <span>{selectedCandidate.dateAndTime}</span></p>
            <p>Initiative: <span>{selectedCandidate.initiative}</span></p>
            <p>Motivation: <span>{selectedCandidate.motivation}</span></p>
            <p>Influence: <span>{selectedCandidate.influence}</span></p>
            <p>Prioritization: <span>{selectedCandidate.prioritization}</span></p>
            <p>Deadline Adherence: <span>{selectedCandidate.deadlineAdherence}</span></p>
            <p>Multitasking: <span>{selectedCandidate.multitasking}</span></p>
            <p>Job Specific Knowledge: <span>{selectedCandidate.jobSpecificKnowledge}</span></p>
            <p>Competence in Tools: <span>{selectedCandidate.competenceInTools}</span></p>
            <p>Industry Specific Expertise: <span>{selectedCandidate.industrySpecificExpertise}</span></p>
            <p>Understanding of Challenges: <span>{selectedCandidate.understandingOfChallenges}</span></p>
            <p>Awareness of Potential Issues: <span>{selectedCandidate.awarenessOfPotentialIssues}</span></p>
            <p>Resilience/Bounce Back: <span>{selectedCandidate.resilienceBounceBack}</span></p>
            <p>Handling Pressure: <span>{selectedCandidate.handlingPressure}</span></p>
            <p>Enthusiasm for Role: <span>{selectedCandidate.enthusiasmForRole}</span></p>
            <p>Long Term Career Goals: <span>{selectedCandidate.longTermCareerGoals}</span></p>
            <p>Professional Connections: <span>{selectedCandidate.professionalConnections}</span></p>
            <p>Collaboration with Colleagues: <span>{selectedCandidate.collaborationWithColleagues}</span></p>
            <p>Contribution to Team Success: <span>{selectedCandidate.contributionToTeamSuccess}</span></p>
            <p>Status: <span>{selectedCandidate.status}</span></p>
            <div>
              <p style={{ color: 'blue', fontWeight: '500' }}>Remarks:</p>
              <input type='textarea' style={{ border: "1px solid blue" }} value={remark} onChange={(e) => setRemark(e.target.value)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={handleSubmitRemark} style={{ border: '2px solid green', padding: '3px', color: 'green', margin: '2%', borderRadius: '3px' }} ><b>Submit</b></Button>
            </div>
          </div>
        )}
      </Modal>

            </div>
    </div>
  );
};

export default FinalCandidateList;

