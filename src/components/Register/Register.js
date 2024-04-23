import React from 'react';
import './Register.css'; 

//Import this link in index.html 
/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"> */


function Register() {
  return (
    <div className="triangle">
      <div className="reg_main">
        <div className="sub_reg">
          <div className="sec_form">
            <h2 className="top">Register</h2>
            <form>
              <div className="fill-1">
                <div className="cir-1">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <input type="text" placeholder="Full Name" className="box" />
              </div>
              <div className="fill-2">
                <div className="cir-2">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <input type="email" placeholder="Email" className="box" />
              </div>
              <div className="fill-1">
                <div className="cir-1">
                  <i className="fa-solid fa-unlock"></i>
                </div>
                <input type="password" placeholder="Password" className="box" />
              </div>
              <div className="fill-2">
                <div className="cir-2">
                  <i className="fa-solid fa-unlock"></i>
                </div>
                <input type="password" placeholder="Confirm Password" className="box" />
              </div>
              <div className="btn_reg">
                <button className="clig">Create Account</button>
              </div>
              <div className="bottom">
                <p>Already have an account?</p>
                <a href="/" className="link">
                  <p className="quick"> Sign In </p>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
