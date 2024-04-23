import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, FormControl } from 'react-bootstrap';
import Modal from 'react-modal';
// import io from 'socket.io-client';

const InterviewAssignList = () => {
    const [candidates, setCandidates] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [remarkModalIsOpen, setRemarkModalIsOpen] = useState(false); // New state for the remark modal
    const [searchInput, setSearchInput] = useState('');

    const [formData, setFormData] = useState({
        initiative: 5,
        motivation: 5,
        influence: 5,
        prioritization: 5,
        deadlineAdherence: 5,
        multitasking: 5,
        jobSpecificKnowledge: 5,
        competenceInTools: 5,
        industrySpecificExpertise: 5,
        understandingOfChallenges: 5,
        awarenessOfPotentialIssues: 5,
        resilienceBounceBack: 5,
        handlingPressure: 5,
        enthusiasmForRole: 5,
        longTermCareerGoals: 5,
        relationshipBuilding: 5,
        professionalConnections: 5,
        collaborationWithColleagues: 5,
        contributionToTeamSuccess: 5,

        // Other form fields with initial values
    });




    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // _____________________________________________________________________________________________________________________________________________________________________________________________





    useEffect(() => {
        // Fetch candidate data from the new API endpoint
        axios.get('http://192.168.2.11:5050/firstround/and/candidates/details')
            .then(response => {
                setCandidates(response.data);
                setFilteredCandidates(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    // -__________________________________________________________________________________________________________________________________________________________________________________________________
    // useEffect(() => {

    //     console.log(localStorage.getItem('username'));

    //     axios.post('http://192.168.2.11:5l050/first/round/particular', {
    //         assignedTo: localStorage.getItem('username'),
    //         department: localStorage.getItem('department')})
    //     .then(response => {
    //             console.log('get response'+ response.data)
    //             setCandidates(response.data);
    //             setFilteredCandidates(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // })

    const handleRemarkModalOpen = () => {
        // Open the remark modal
        setRemarkModalIsOpen(true);
    };

    const handleRemarkModalClose = () => {
        // Close the remark modal
        setRemarkModalIsOpen(false);
    };

    const handleRowClick = (candidate) => {
        // Set the selected candidate for displaying details
        setSelectedCandidate(candidate);
        setModalIsOpen(true);
    };

    const handleClosePopup = () => {
        // Close the pop-up by resetting selectedCandidate
        setSelectedCandidate(null);
        setModalIsOpen(false);
    };

    const handleSearch = () => {
        const filtered = candidates.filter(candidate =>
            (candidate.fullName && candidate.fullName.toLowerCase().includes(searchInput.toLowerCase())) ||
            (candidate.status && candidate.status.toLowerCase().includes(searchInput.toLowerCase()))
        );
        setFilteredCandidates(filtered);
    };


    const handleAllDataSend = () => {
        // Retrieve input field values
        // const formData = {
        //     LastRemarkerName: localStorage.getItem('username'),
        //     dateAndTime: localStorage.getItem('DateAndTime'),
        //     // Add other input field values here
        //     initiative: formData.initiative,
        //     motivation: formData.motivation,
        //     influence:  formData.influence,
        //     prioritization:  formData.prioritization,
        //     deadlineAdherence:  formData.deadlineAdherence,
        //     multitasking: formData.multitasking,
        //     jobSpecificKnowledge: formData.jobSpecificKnowledge,
        //     competenceInTools:formData.competenceInTools,
        //     industrySpecificExpertise: formData.industrySpecificExpertise,
        //     understandingOfChallenges: formData.understandingOfChallenges,
        //     awarenessOfPotentialIssues:formData.awarenessOfPotentialIssues,
        //     resilienceBounceBack: formData.resilienceBounceBack,
        //     handlingPressure:formData.handlingPressure,
        //     enthusiasmForRole: formData.enthusiasmForRole,
        //     longTermCareerGoals:formData.longTermCareerGoals,
        //     relationshipBuilding: formData.relationshipBuilding,
        //     professionalConnections: formData.professionalConnections,
        //     collaborationWithColleagues:formData.collaborationWithColleagues,
        //     contributionToTeamSuccess:formData.contributionToTeamSuccess,
        // };

        // Send data to API using Axios
        axios.post('http://192.168.2.11:5050/second/round', {
            LastRemarkerName: localStorage.getItem('username'),
            dateAndTime: localStorage.getItem('DateAndTime'),
            candidateName: document.getElementById('CandidateName').innerHTML,
            candidateFatherName: document.getElementById('CandidateFatherName').innerHTML,
            candidateDOB: document.getElementById('CandidateDOB').innerHTML,


            ...formData
        })
            .then(response => {
                // Handle success
                console.log('Data sent successfully:', response.data);
                window.location.reload();

            })
            .catch(error => {
                // Handle errors
                console.error('Error sending data:', error);
            });
    };

    // const fetchCandidates = async () => {
    //     try {
    //       const response = await axios.get('http://192.168.2.11:5050/candidates'); // Adjust the endpoint as needed
    //       setCandidates(response.data);
    //       setFilteredCandidates(response.data);
    //     } catch (error) {
    //       console.error('Error fetching candidates:', error);
    //     }
    //   };

    return (
        <div style={{ marginLeft: '60px' }}>
            <h2>Assigned Interview List</h2>
            <div>
                <FormControl
                    style={{ padding: '5px 10px ', marginLeft: '20px', border: '.5px solid black', borderRadius: '5px' }}
                    type="text"
                    placeholder="Search by Candidate Name, Apply Post, Assign By, or Assign To"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <Button className='uyhyy' style={{ borderRadius: '5px', padding: '5px 10px ', marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Candidate Name</th>
                        <th>Apply Post</th>
                        <th>Assign By</th>
                        <th>Assign To</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCandidates.map(candidate => (
                        <tr key={candidate.id} onClick={() => handleRowClick(candidate)}>
                            <td>{candidate.candidateName}</td>
                            <td>{candidate.ApplyedFor}</td>
                            <td>{candidate.assignedBy}</td>
                            <td>{candidate.assignedTo}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectedCandidate && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={handleClosePopup}
                    style={{
                        content: {
                            width: '500px',
                            height: '500px',
                            margin: 'auto',
                            overflowY: 'scroll'
                        }
                    }}
                >
                    <div>
                        <div>
                            <h2>Candidate Details</h2>
                            <p>Name :<span id='CandidateName'>{selectedCandidate.fullName}</span></p>
                            <p>Age: <span>{selectedCandidate.age}</span></p>
                            <p>Date Of Birth :<span id='CandidateDOB'>{selectedCandidate.candidateDOB} </span></p>
                            <p>Father's Name :<span id='CandidateFatherName'>{selectedCandidate.candidateFatherName}</span></p>
                            <p>Correspondence Address: <span>{selectedCandidate.correspondenceAddress}</span></p>
                            <p>Permanent Address: <span>{selectedCandidate.permanentAddress}</span></p>
                            <p>Phone Number: <span>{selectedCandidate.phoneNo}</span></p>
                            <p>Email: <span>{selectedCandidate.email}</span></p>
                            <p>Assigned To :{selectedCandidate.assignedTo}</p>
                            <p> Qualification: <span>{selectedCandidate.Qualification}</span></p>
                            {/* Add more details here as needed */}
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
                            <a href={selectedCandidate.url} style={{ cursor: 'pointer', backgroundColor: 'green', padding: '5px 10px' }} target='_blank'>See Resume</a>
                        </div>

                        <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Round 1 Details</h3>

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
                        </div>
                    </div>
                    {/* <Button onClick={handleClosePopup}>Close</Button> */}

                    <Button className='epicOne' onClick={handleRemarkModalOpen}>Remark</Button>
                </Modal>
            )}


            {remarkModalIsOpen && (
                <Modal
                    isOpen={remarkModalIsOpen}
                    onRequestClose={handleRemarkModalClose}
                    style={{
                        content: {
                            width: '80vw',
                            height: '80vh',
                            margin: 'auto'
                        }
                    }}
                >
                    <div>
                        <h2>Remark</h2>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2>Leadership Potential</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='initiative'>Initiative</label>
                            <input type="range" id="initiative" name="initiative" value={formData.initiative} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.initiative}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='motivation'>Motivation</label>
                            <input type="range" id="motivation" min="0" max="10" name="motivation" value={formData.motivation} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.motivation} </span>
                                <span>10</span>
                            </div>



                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='influence'>Ability to inspire and influence others</label>
                            <input type="range" id="influence" min="0" max="10" name="influence" value={formData.influence} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.influence}</span>
                                <span>10</span>
                            </div>
                        </div>




                        <div className="bg-white p-8 rounded shadow-md">
                            <h2>Time Management</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='prioritization'>Prioritization</label>
                            <input type="range" id="prioritization" min="0" max="10" name="prioritization" value={formData.prioritization} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.prioritization}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='deadlineAdherence'>Deadline adherence</label>
                            <input type="range" id="deadlineAdherence" min="0" max="10" name="deadlineAdherence" value={formData.deadlineAdherence} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.deadlineAdherence}</span>
                                <span>10</span>
                            </div>



                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='multitasking'>Multitasking</label>
                            <input type="range" id="multitasking" min="0" max="10" name="multitasking" value={formData.multitasking} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.multitasking}</span>
                                <span>10</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2>Technical Skills</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='jobSpecificKnowledge'>Job-specific knowledge</label>
                            <input type="range" id="jobSpecificKnowledge" min="0" max="10" name="jobSpecificKnowledge" value={formData.jobSpecificKnowledge} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.jobSpecificKnowledge}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='competenceInTools'>Competence in relevant tools or software</label>
                            <input type="range" id="competenceInTools" min="0" max="10" name="competenceInTools" value={formData.competenceInTools} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.competenceInTools}</span>
                                <span>10</span>
                            </div>



                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='industrySpecificExpertise'>Industry-specific expertise</label>
                            <input type="range" id="industrySpecificExpertise" min="0" max="10" name="industrySpecificExpertise" value={formData.industrySpecificExpertise} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.industrySpecificExpertise}</span>
                                <span>10</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2> Problem Awareness</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='understandingOfChallenges'>Understanding of challenges in the industry</label>
                            <input type="range" id="understandingOfChallenges" min="0" max="10" name="understandingOfChallenges" value={formData.understandingOfChallenges} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.understandingOfChallenges}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='awarenessOfPotentialIssues'>Awareness of potential issues in the role</label>
                            <input type="range" id="awarenessOfPotentialIssues" min="0" max="10" name="awarenessOfPotentialIssues" value={formData.awarenessOfPotentialIssues} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.awarenessOfPotentialIssues}</span>
                                <span>10</span>
                            </div>




                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2> Resilience</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='resilienceBounceBack'>Ability to bounce back from setbacks</label>
                            <input type="range" id="resilienceBounceBack" min="0" max="10" name="resilienceBounceBack" value={formData.resilienceBounceBack} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.resilienceBounceBack}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='handlingPressure'>Handling pressure and stress</label>
                            <input type="range" id="handlingPressure" min="0" max="10" name="handlingPressure" value={formData.handlingPressure} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.handlingPressure} </span>
                                <span>10</span>
                            </div>




                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2>Motivation and Passion</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='enthusiasmForRole'>Enthusiasm for the role and company</label>
                            <input type="range" id="enthusiasmForRole" min="0" max="10" name="enthusiasmForRole" value={formData.enthusiasmForRole} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.enthusiasmForRole} </span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='longTermCareerGoals' >Long-term career goals</label>
                            <input type="range" id="longTermCareerGoals" min="0" max="10" name="longTermCareerGoals" value={formData.longTermCareerGoals} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.longTermCareerGoals}</span>
                                <span>10</span>
                            </div>




                        </div>

                        <div className="bg-white p-8 rounded shadow-md">
                            <h2>Networking Skills </h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='relationshipBuilding'>Relationship building within and outside the organization</label>
                            <input type="range" id="relationshipBuilding" min="0" max="10" name="relationshipBuilding" value={formData.relationshipBuilding} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.relationshipBuilding}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='professionalConnections'>Professional connections</label>
                            <input type="range" id="professionalConnections" min="0" max="10" name="professionalConnections" value={formData.professionalConnections} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.professionalConnections}</span>
                                <span>10</span>
                            </div>



                        </div>


                        <div className="bg-white p-8 rounded shadow-md">
                            <h2> Teamwork</h2>
                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='collaborationWithColleagues'>Collaboration with colleagues</label>
                            <input type="range" id="collaborationWithColleagues" min="0" max="10" name="collaborationWithColleagues" value={formData.collaborationWithColleagues} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.collaborationWithColleagues}</span>
                                <span>10</span>
                            </div>


                            <label htmlFor="rangeInput" className="text-lg font-bold mb-2 block" id='contributionToTeamSuccess'>Contribution to team success</label>
                            <input type="range" id="contributionToTeamSuccess" min="0" max="10" name="contributionToTeamSuccess" value={formData.contributionToTeamSuccess} onChange={handleInputChange} />
                            <div className="flex justify-between mt-2 text-gray-600">
                                <span>{formData.contributionToTeamSuccess}</span>
                                <span>10</span>
                            </div>




                        </div>


                        <div className="input-group" style={{ width: '20%' }}>
                            <label htmlFor="Status">Status:</label>
                            <select className='hghgch' id="status" name="status" onChange={handleInputChange} required>
                                <option value="">Select an option</option>
                                <option value="ON Hold">ON Hold</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Selected">Selected</option>

                            </select>
                        </div>
                        {/* <Button onClick={handleRemarkModalClose}>Close</Button> */}
                        <div className='ewdf414'>
                            <Button className='epicOne' onClick={handleAllDataSend}>Submit</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};


export default InterviewAssignList;
