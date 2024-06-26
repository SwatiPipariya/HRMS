// FinalCandidateListHeader.js
import React, {useState} from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FinalCandidateListHeader = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [clients, setClients] = useState([]);

    
  const handleSearch = () => {
    const filtered = clients.filter(client =>
      (client.ClientsName && client.ClientsName.toLowerCase().includes(searchInput.toLowerCase())) ||
      (client.ClientStatus && client.ClientStatus.toLowerCase().includes(searchInput.toLowerCase()))
    );
    setFilteredClients(filtered);
  };

  return (
    <div style={{ marginLeft: '60px' }}>
      <h2>Final Candidate List</h2>
      <div>
        <FormControl
          type="text"
          style={{ border: '.5px solid gray', borderRadius: '5px' }}
          placeholder="Search by Name or Status"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button className='SearchModelButton' style={{ marginLeft: '20px' }} onClick={handleSearch}>Search</Button>
      </div>

      <div style={{marginTop: '1%'}}>
        <Link className='qoxnd' to={{ pathname: "/complete", state: { filteredClients: filteredClients.filter(candidate => candidate.status === "Selected") } }}>Complete</Link>
        <Link className='uqpvcen' to={{ pathname: "/pending", state: { filteredClients: filteredClients.filter(candidate => candidate.status !== "Selected") } }}>Pending</Link>
      </div>
    </div>
  );
};

export default FinalCandidateListHeader;
