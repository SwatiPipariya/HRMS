import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, FormControl } from 'react-bootstrap';
import Modal from 'react-modal';

const ViewVisitor = () => {
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Fetch visitor data from the API
    axios.get('http://192.168.2.11:5050/visitors')
      .then(response => {
        setVisitors(response.data.visitors);
        setFilteredVisitors(response.data.visitors);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  
  const handleRowClick = (visitor) => {
    // Set the selected visitor for displaying details
    setSelectedVisitor(visitor);
    setModalIsOpen(true);
  };

  const handleClosePopup = () => {
    // Close the pop-up by resetting selectedVisitor
    setSelectedVisitor(null);
    setModalIsOpen(false);
  };

  const handleSearch = () => {
    const filtered = visitors.filter(visitor =>
      visitor.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      visitor.reason.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredVisitors(filtered);
  };

  return (
    <div style={{marginLeft:'60px'}}>
      <h2>Visitor List</h2>
      <div>
        <FormControl
          type="text"
          placeholder="Search by Name or Reason"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason</th>
            <th>Approved By</th>
            <th>Date</th>
            {/* <th>Attended By</th> */} 
          </tr>
        </thead>
        <tbody>
          {filteredVisitors.map(visitor => (
            <tr key={visitor.id} onClick={() => handleRowClick(visitor)}>
              <td>{visitor.name}</td>
              <td>{visitor.reason}</td>
              <td>{visitor.approvedBy}</td>
              <td>{visitor.dateAndTime}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedVisitor && (
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
              <h2>Visitor Details</h2>
              {/* <p><strong>Name:</strong> {selectedVisitor.name}</p>
              <p><strong>Reason:</strong> {selectedVisitor.reason}</p>
              <p><strong>Approved By:</strong> {selectedVisitor.approvedBy}</p>
              <p><strong>Attended By:</strong> {selectedVisitor.itemCount}</p>
              <p><strong>Attended By:</strong> {selectedVisitor.dateAndTime}</p>
              <p><strong>Attended By:</strong> {selectedVisitor.feedback}</p> */}

<p>Name: <span>{selectedVisitor.name}</span></p>
<p>Reason: <span>{selectedVisitor.reason}</span></p>
<p>Approved By: <span>{selectedVisitor.approvedBy}</span></p>
<p>Attended By: <span>{selectedVisitor.attendedBy}</span></p>
<p>Date and Time: <span>{selectedVisitor.dateAndTime}</span></p>
<p>Item Count: <span>{selectedVisitor.itemCount}</span></p>
<p>Feedback: <span>{selectedVisitor.feedback}</span></p>

            </div>
          </div>
          <div className='ewdf414'>
            
          <Button className='epicOne' onClick={handleClosePopup}>Close</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ViewVisitor;
