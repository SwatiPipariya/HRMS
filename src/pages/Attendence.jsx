import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
function Attendence() {
  const [data, setdata] = useState([]);
  const columns = [
    {
      name: "username",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "TotalBreakDuration",
      label: "TotalBreakDuration",
      //  options: {
      //   filter: true,
      //   sort: false,
      //  }
    },
    {
      name: "Login",
      label: "Login",
      //  options: {
      //   filter: true,
      //   sort: false,
      //  }
    },
    {
      name: "Logout",
      label: "Logout",
      //  options: {
      //   filter: true,
      //   sort: false,
      //  }
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "attendence",
      label: "Attendence",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  useEffect(() => {
    const date = new Date();
    let day = date.getDate() - 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    axios
      .post("http://192.168.2.11:5050/download", {
        username: "Dheeraj",
        date: `${day}/0${month}/${year}`,
        // "date":"no"
      })
      .then((res) => {
        setdata(res.data.data);
        console.log(res.data.data);
      });
  }, []);

  //  const data = [
  //   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
  //   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
  //   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
  //   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
  //  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    data && (
      <MUIDataTable
        title={"Attendence"}
        data={data}
        columns={columns}
        options={options}
      />
    )
  );
}

export default Attendence;
