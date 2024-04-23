import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table  , Button, FormControl } from 'react-bootstrap';
import Modal from 'react-modal';

const ClientsList = () => {
  const [clients, setClients] = useState([]);
  const [filteredClients, setFilteredClients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://192.168.2.11:5050/seeclients'); // Adjust the endpoint as needed
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
    setSelectedClient(client);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedClient(null);
    setModalIsOpen(false);
  };

  return (
    <div style={{ marginLeft: '60px' }}>
      <h2>Clients List</h2>
      <div>
        <FormControl
          type="text"
          style={{ border: '.5px solid gray', borderRadius: '5px' }}
          placeholder="Search by Name or Status"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='SearchModelButton' style={{marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Month</th>
            <th>Clients Name</th>
            <th>Client Region Type</th>
            <th>External SPOC</th>
            <th>Client Onboarded By</th>
            <th>Client Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr key={client.SNo} onClick={() => openModal(client)}>
              <td>{client.Month}</td>
              <td>{client.ClientsName}</td>
              <td>{client.ClientRegionType}</td>
              <td>{client.ExternalSPOC}</td>
              <td>{client.ClientOnboardedBy}</td>
              <td>{client.ClientStatus}</td>
             
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
        <Button className='EditModelButton' onClick={closeModal}>Edit</Button>
        </div>

        {selectedClient && (
          <div>
            <h2>Client Details</h2>
            <p>Month: {selectedClient.Month}</p>
            <p>Clients Name: {selectedClient.ClientsName}</p>
            <p>Client Region Type: {selectedClient.ClientRegionType}</p>
            <p>External SPOC: {selectedClient.ExternalSPOC}</p>
            <p>Client Onboarded By: {selectedClient.ClientOnboardedBy}</p>
            <p>Client Status: {selectedClient.ClientStatus}</p>
            <p>LeadType:{selectedClient.LeadType}</p>
              <p>ServiceType:{selectedClient.ServiceType}</p>
              <p>SubServiceType:{selectedClient.SubServiceType}</p>
              <p>LastFollowUp:{selectedClient.LastFollowUp}</p>
              <p>Stage1Note:{selectedClient.Stage1Note}</p>
              <p>Stage2Note:{selectedClient.Stage2Note}</p>
              <p>FinalRemark:{selectedClient.FinalRemark}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ClientsList;
