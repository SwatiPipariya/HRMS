import React, { useState, useEffect } from "react";
import axios from 'axios';
export default function HiringFlow() {
  const [approvers, setApprovers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [userList, setUserList] = useState([]);

  const handleUserSelect = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleAddApprover = () => {
    if (selectedUser && !approvers.includes(selectedUser)) {
      setApprovers([...approvers, selectedUser]);
      setSelectedUser("");
    }
  };


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


  const handleRemoveApprover = (index) => {
    const newApprovers = [...approvers];
    newApprovers.splice(index, 1);
    setApprovers(newApprovers);
  };


  const saveApprovers = () =>{
    // api code 
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Hiring Flow</h2>
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
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddApprover}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2"
          >
            Add Approver
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Approvers:</h3>
          <ul className="flex flex-col">
            {approvers?.map((approver, index) => (
              <li
                key={index}
                className="flex block items-center justify-between mb-2"
              >
                <span className="m-3">{index+1}</span><span className="m-3">{approver}</span>
                <button
                  onClick={() => handleRemoveApprover(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Save
</button>
    </div>
  );
}
