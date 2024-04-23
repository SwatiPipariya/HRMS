import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveApprovalPage = () => {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    // Fetch leave applications from the server
    axios
      .get("your-api-endpoint")
      .then((response) => {
        setLeaveApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave applications:", error);
      });
  }, []);

  const handleApprove = (id) => {
    // Handle leave approval logic
    console.log("Leave application approved:", id);
  };

  const handleReject = (id) => {
    // Handle leave rejection logic
    console.log("Leave application rejected:", id);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Leave Applications</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Employee Name</th>
            <th className="px-4 py-2">Leave Type</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveApplications.map((application) => (
            <tr key={application.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{application.employeeName}</td>
              <td className="px-4 py-2">{application.leaveType}</td>
              <td className="px-4 py-2">{application.startDate}</td>
              <td className="px-4 py-2">{application.endDate}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleApprove(application.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(application.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveApprovalPage;
