import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import FinalCandidateListHeader from './FinalCandidateListHeader';

const Complete = () => {
  const [candidatesWithRemarks, setCandidatesWithRemarks] = useState([]);

  useEffect(() => {
    fetchCandidatesWithRemarks();
  }, []);

  const fetchCandidatesWithRemarks = async () => {
    try {
      const response = await axios.get('http://your-api-endpoint'); // Adjust the endpoint as needed
      setCandidatesWithRemarks(response.data);
    } catch (error) {
      console.error('Error fetching candidates with remarks:', error);
    }
  };

  return (
    <>
    <FinalCandidateListHeader />
    <div style={{ marginLeft: '60px' }}>
      <h2>Candidates With Remarks</h2>
      <Table striped bordered hover>
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
          {candidatesWithRemarks.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.fullName}</td>
              <td style={{ color: 'gray' }}>{candidate.ApplyedDFor}</td>
              <td style={{ color: 'gray' }}>{candidate.time}</td>
              <td style={{ color: 'gray' }}>{candidate.date}</td>
              <td style={{ color: '#0c0c0cc9' }} className={`stat-btn ${candidate.status === 'Selected' ? 'green-button' : candidate.status === 'ON Hold' ? 'yellow-button' : candidate.status === 'Rejected' ? 'red-button' : candidate.status === ''}`}>{candidate.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
              </>
  );
};

export default Complete;

