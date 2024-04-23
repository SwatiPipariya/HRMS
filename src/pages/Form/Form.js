import React from 'react'
import './Form.css'

function Form() {
  return (
  <div className="container">
    {/* <div className="text">
      Contact us Form
    </div> */}
    <form action="#">
      <div className="form-row">
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">First Name</label>
        </div>
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Last Name</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Contact No.</label>
        </div>
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Email Address</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Permanent Address</label>
        </div>
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Qualification</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Email Address</label>
        </div>
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">City</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">State</label>
        </div>
        <div className="input-data">
          <input type="text" className='lokm' required />
          <div className="underline"></div>
          <label htmlFor="">Country</label>
        </div>
      </div>
      <div className="form-row">
        <div className="input-data textarea">
          <textarea rows="8" cols="80" className='lokm' required></textarea>
          <br />
          <div className="underline"></div>
          <label htmlFor="">Write your message</label>
          <br />
        </div>
      </div>
      <div className="form-row submit-btn">
        <div className="input-data">
          <div className="inner"></div>
          <input type="submit" value="submit"  className='lokm'/>
        </div>
      </div>
    </form>
  </div>
    )
}
 

export default Form