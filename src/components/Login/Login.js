import './Login.css'; 
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import this link in index.html
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */




  const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  console.log(" login", username, password );
    const handleLogin = async () => {
      try {
        // Make API call to the login endpoint (replace with your actual API endpoint)
        const response = await axios.post("http://192.168.2.11:5050/auth", {
          username,
          password,
        });
  
        // Assuming the API returns a boolean value indicating success
        if (response.data.login === true) {
          // Save user information in local storage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", username);
          localStorage.setItem("department", response.data.username.department);
          localStorage.setItem("Name", response.data.username.name);

          // Trigger the onLogin function to update state in App.js
          onLogin();
  
          // Redirect to the dashboard
          navigate("/");
        } else {
          // Handle unsuccessful login
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        // Handle API call error
        console.error("Error during login:", error);
        alert("An error occurred during login. Please try again.");
      }
    };


  return (
    <div className="triangle">
      <div className="log_main">
        <div className="sub_main">
          <h2 className="heading">Login</h2>
          <form>
            <div className="field-1">
              <div className="circle-1">
                <i className="fa fa-user" aria-hidden="true"></i>
              </div>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className="rect achbui" />
            </div>
            <div className="field-2">
              <div>
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}  className="rect" />
              </div>
              <div className="circle-2">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
              </div>
            </div>
            <p className="d9i8y">Forgot Password ?</p>

            <div className="bef68">
              <button type="button" onClick={handleLogin}   className="btn_lin">Login</button>
              <button className="btn_lin">Register</button>
            </div>
            <div className="fghjuy">
              <p>Not a member? </p>
              <a className="cat" href="/">
                <p className="swe"> Sign-Up now </p>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
