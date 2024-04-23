// import React, { useState } from "react";
// import axios from "axios";

// const AddUser = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     name: "",
//     email: "",
//     password: "",
//     TL: "",
//     designation: "",
//     department: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("/register", formData);
//       console.log("Registration response:", response.data);

//       if (response.data.register) {
//         // Registration successful, you can redirect or show a success message
//         console.log("User registered successfully");
//       } else {
//         // Registration failed, you can show an error message
//         console.log("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8">
//       <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//           type="text"
//           name="name"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Name"
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         />
//         <input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Username"
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Password"
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         />
//         <select
//           name="TL"
//           value={formData.TL}
//           onChange={handleChange}
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         >
//           <option value="Dheeraj.Saxena">Dheeraj Saxena</option>
//           <option value="Madhuri.Shirvastava">Madhuri Shirvastava</option>
//           <option value="Sourabh.Bairagi">Sourabh Bairagi</option>
//           <option value="Anurag.Mishra">Anurag Mishra</option>
//           <option value="Nitesh.Saxena">Nitesh Saxena</option>
//           <option value="Rida.Abbasi">Rida Abbasi</option>
//           <option value="Nupendra Singh">Nupendra Singh</option>
//           <option value="">Select Team Leader</option>
//           {/* Add your Team Leader options here */}
//         </select>
//         <input
//           type="text"
//           name="designation"
//           value={formData.designation}
//           onChange={handleChange}
//           placeholder="Designation"
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         />
//         <select
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
//         >
//           <option value="">Select Department</option>
//           {/* Add your Department options here */}
//         </select>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };
// export default AddUser;






// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationPage = () => {
//   const [userData, setUserData] = useState({
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//     TL: '',
//     designation: '',
//     department: '',
//     avatar: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setUserData((prevData) => ({
//       ...prevData,
//       avatar: file,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     for (const key in userData) {
//       formData.append(key, userData[key]);
//     }

//     try {
//       const response = await axios.post('http://192.168.2.11:5050/registerAndUpload', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Registration Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Team Lead (TL):
//           <input type="text" name="TL" value={userData.TL} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Designation:
//           <input type="text" name="designation" value={userData.designation} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Department:
//           <input type="text" name="department" value={userData.department} onChange={handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Avatar:
//           <input type="file" name="avatar" accept="image/*" onChange={handleFileChange} />
//         </label>
//         <br />
//         <button type="submit">Register and Upload</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationPage;




import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css'; // Import your CSS file

const AddUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    TL: '',
    Designation: '',
    department: '',
    avatar: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    try {
      const response = await axios.post('http://192.168.2.11:5050/registerAndUpload', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="registration-container">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <label className='dbg'>
          Username:
          <input type="text" className='kjfdfkm' name="username" value={userData.username} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Name:
          <input type="text" name="name" className='kjfdfkm' value={userData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Email:
          <input type="email" name="email" className='kjfdfkm' value={userData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Password:
          <input type="password" name="password" className='kjfdfkm' value={userData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Team Lead (TL):
          <input type="text" name="TL" value={userData.TL} className='kjfdfkm' onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Designation:
          <input className='kjfdfkm' type="text" name="Designation" value={userData.designation} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Department:
          <input type="text" name="department" className='kjfdfkm' value={userData.department} onChange={handleInputChange} />
        </label>
        <br />
        <label className='dbg'>
          Avatar:
          <input type="file" className='kjfdfkm' name="avatar" accept="image/*" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit" className="submit-button">Register and Upload</button>
      </form>
    </div>
  );
};

export default AddUser;
