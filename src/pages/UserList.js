import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const UsersList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const tableRef = useRef();

  useEffect(() => {
    axios
      .get("http://192.168.2.11:5050/users")
      .then((response) => {
        const fetchedData = response.data;
        setData(fetchedData);
        setFilteredData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    printRowCount();
  }, []);

  const printRowCount = () => {
    setTimeout(() => {
      const table = document.getElementById("myTable");

      if (table) {
        const rowCount = table.rows.length;
        localStorage.setItem("Users", rowCount);
        console.log(`Number of rows in the table: ${rowCount}`);
      } else {
        console.log("Table not found");
      }
    }, 1000);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toUpperCase();
    const matchingRows = data.filter(
      (row) =>
        row.TL.toString().toUpperCase().includes(searchTerm) ||
        row.username.toUpperCase().includes(searchTerm)
    );
    const nonMatchingRows = data.filter((row) => !matchingRows.includes(row));
    setFilteredData([...matchingRows, ...nonMatchingRows]);

    if (tableRef.current) {
      tableRef.current.scrollTo(0, 0);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Lists</h1>
      <input
        type="text"
        id="searchInput"
        onKeyUp={handleSearch}
        placeholder="Search by ID or Name"
        className="p-2 border border-gray-300 rounded-md mb-4"
      />

      <table ref={tableRef} id="myTable" className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Team Leader</th>
            <th className="px-4 py-2">Person</th>
            <th className="px-4 py-2">Designation</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{row.TL}</td>
              <td className="px-4 py-2">{row.username}</td>
              <td className="px-4 py-2">{row.Designation}</td>
              <td className="px-4 py-2">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    row.Status === "online" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;


