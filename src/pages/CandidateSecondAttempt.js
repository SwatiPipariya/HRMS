

import React, { useState } from 'react';
import axios from 'axios';

function AddCandidate() {
    const [formData, setFormData] = useState({
        source: '',
        sourceName: '',
        dateOfFirstInterview: '',
        date: '',
        fullName: '',
        age: '',
        dob: '',
        placeOfBirth: '',
        fatherName: '',
        correspondenceAddress: '',
        permanentAddress: '',
        phoneNo: '',
        email: '',
        tenthPercentage: '',
        twelfthPercentage: '',
        graduation: '',
        pg: '',
        otherQualification: '',
        vocationalTrainingOrganization: '',
        vocationalTrainingLocation: '',
        vocationalTrainingProjectTopic: '',
        vocationalTrainingPeriod: '',
        workExperienceOrganization: '',
        workExperiencePosition: '',
        workExperienceResponsibilities: '',
        workExperienceFrom: '',
        workExperienceTo: '',
        workExperienceReasonForLeaving: '',
        timeRequiredForJoining: '',
        currentCTC: '',
        expectedCTC: '',
        interviewerName: '',
        status: '',
        workExperience: '',

    });

    const [file, setFile] = useState(null);
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;

        setFile(selectedFile);
    };


    const workExperienceElement = document.getElementById('workExperience');

    if (workExperienceElement) {
        // Access the value of the 'workExperience' element
        const workExperience = workExperienceElement.value;

        // Check if the value is 'Yes'
        if (workExperience === 'Exprienced') {
            // Get the element with ID 'onlyExperienced'
            const onlyExperienced = document.getElementById('onlyExperienced');

            // Check if the element with ID 'onlyExperienced' exists
            if (onlyExperienced) {
                // Set the display style to 'block'
                onlyExperienced.style.display = 'block';
            }
        } else if (workExperience === 'Fresher') {
            // Get the element with ID 'onlyExperienced'
            const onlyExperienced = document.getElementById('onlyExperienced');

            // Check if the element with ID 'onlyExperienced' exists
            if (onlyExperienced) {
                // Set the display style to 'block'
                onlyExperienced.style.display = 'none';
            }
        }
    }


    const uploadFile = () => {
        if (!file) {
            alert('Please choose a file.');
            return;
        }

        const formDataToSend = new FormData();


        // const formData = new FormData();

        // Append all fields from the "formData" state
        // Object.entries(formData).forEach(([fieldName, value]) => {
        //     formData.append(fieldName, value);
        // });

        // Append all fields from the "formData" state
        Object.entries(formData).forEach(([fieldName, value]) => {
            formDataToSend.append(fieldName, value);
        });

        formDataToSend.append('file', file);

        // const formDataObject = {};
        // formData.forEach((value, key) => {
        //     formDataObject[key] = value;
        // });
        // console.log(JSON.stringify(formDataObject));

        axios.post('http://192.168.2.11:5050/candidateWithResume', formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })



            .then(response => {
                // Handle the response
                console.log(response.data);
                setResponse(`File uploaded successfully! ${response.data.message}`);
                window.location.reload();

            })
            .catch(error => {
                // Handle errors
                console.error(error);
                setResponse(`Error uploading file: ${error.response ? error.response.data.error : 'Unknown error'}`);
            });
    };


    return (
        <div style={{ marginLeft: '70px' }}>
            <h1>Second Attempt Form</h1>
            <div className="abc">
                <div className="input-group">
                    <label htmlFor="source">Source:</label>
                    <select className='hghgch' id="source" name="source" onChange={handleChange} required>
                        <option value="">Select an option</option>
                        <option value="Campus/College">Campus/College</option>
                        <option value="Employee referral">Employee referral</option>
                        <option value="Hiring Counselor">Hiring Counselor</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Job Portal">Job Portal</option>
                        <option value="Walkin">Walkin</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="sourceName">Source Name:</label>
                    <input className='hghgch' type="text" id="sourceName" name="sourceName" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="dateOfFirstInterview">Date of 1st Interview:</label>
                    <input className='hghgch' type="date" id="dateOfFirstInterview" name="dateOfFirstInterview" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="date">Date:</label>
                    <input className='hghgch' type="date" id="date" name="date" onChange={handleChange} />
                </div>
                {/* ..................................................................... */}
                <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Personal Details</h3>
                <div className="input-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="fullName " className='hghgch' name="fullName" onChange={handleChange} required />
                </div>



                <div className="input-group">
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age " className='hghgch' name="age" onChange={handleChange} required />


                </div>
                <div className="input-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob " className='hghgch' name="dob" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="placeOfBirth">Place of Birth:</label>
                    <input type="text" id="placeOfBirth " className='hghgch' name="placeOfBirth" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="fatherName">Father's Name:</label>
                    <input type="text" id="fatherName  " className='hghgch' name="fatherName" onChange={handleChange} required />
                </div>
                <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Check Candidate</button>
                </div>
                <div className="input-group">
                    <label htmlFor="correspondenceAddress">Correspondence Address:</label>
                    <textarea id="correspondenceAddress " className='hghgch' name="correspondenceAddress" onChange={handleChange} required />                  </div>
                <div className="input-group">
                    <label htmlFor="permanentAddress">Permanent Address:</label>
                    <textarea id="permanentAddress " className='hghgch' name="permanentAddress" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNo">Phone Number:</label>
                    <input type="tel" id="phoneNo " className='hghgch' name="phoneNo" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email " className='hghgch' name="email" onChange={handleChange} required />


                </div>
                <div className="input-group">
                    <label htmlFor="tenthPercentage">10th Percentage:</label>
                    <input type="text" id="tenthPercentage " className='hghgch' name="tenthPercentage" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="twelfthPercentage">12th Percentage:</label>
                    <input type="text" id="twelfthPercentage " className='hghgch' name="twelfthPercentage" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="graduation">Graduation:</label>
                    <input type="text" id="graduation " className='hghgch' name="graduation" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="pg">Post Graduation:</label>
                    <input type="text" id="pg " className='hghgch' name="pg" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="otherQualification">Other Qualification:</label>
                    <input type="text" id="otherQualification " className='hghgch' name="otherQualification" onChange={handleChange} />
                </div>
                {/* Vocational Training Section */}
                {/* <h3 style={{fontWeight:'bold',fontSize:'25px'}}>Vocational Training</h3>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingOrganization">Organization:</label>
                         <input type="text" id="vocationalTrainingOrganization " className='hghgch' name="vocationalTrainingOrganization"  onChange={handleChange} />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingLocation">Location:</label>
                         <input type="text" id="vocationalTrainingLocation " className='hghgch' name="vocationalTrainingLocation"  onChange={handleChange} />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingProjectTopic">Project Topic:</label>
                         <input type="text" id="vocationalTrainingProjectTopic " className='hghgch' name="vocationalTrainingProjectTopic"  onChange={handleChange}  />
                     </div>
                     <div className="input-group">
                         <label htmlFor="vocationalTrainingPeriod">Period:</label>
                         <input type="text" id="vocationalTrainingPeriod " className='hghgch' name="vocationalTrainingPeriod"  onChange={handleChange}  />
                     </div> */}

                {/* Work Experience Section */}
                <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Work Experience</h3>
                <div className="input-group">
                    <label htmlFor="workExperience">Work Experience:</label>
                    <select className='hghgch' id="workExperience" name="workExperience" value={formData.workExperience} onChange={handleChange} required>
                        <option value="">Select an option</option>

                        <option value="Fresher">Fresher</option>
                        <option value="Exprienced">Experienced</option>
                    </select>
                </div>

                <div id='onlyExperienced'>

                    <div className="input-group">
                        <label htmlFor="workExperienceOrganization">Organization:</label>
                        <input type="text" id="workExperienceOrganization " className='hghgch' name="workExperienceOrganization" onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="workExperiencePosition">Position:</label>
                        <input type="text" id="workExperiencePosition " className='hghgch' name="workExperiencePosition" onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="workExperienceResponsibilities">Responsibilities:</label>
                        <textarea id="workExperienceResponsibilities " className='hghgch' name="workExperienceResponsibilities" onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="workExperienceFromDate">From:</label>
                        <input type="date" id="workExperienceFromDate " className='hghgch' name="workExperienceFrom" onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="workExperienceToDate">To:</label>
                        <input type="date" id="workExperienceToDate " className='hghgch' name="workExperienceTo" onChange={handleChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="workExperienceReasonOfLeaving">Reason for Leaving:</label>
                        <input type="text" id="workExperienceReasonOfLeaving " className='hghgch' name="workExperienceReasonForLeaving" onChange={handleChange} />
                    </div>
                </div>

                {/* Additional Details Section */}
                <h3 style={{ fontWeight: 'bold', fontSize: '25px' }}>Additional Details</h3>
                <div className="input-group">
                    <label htmlFor="timeRequiredForJoining">Time Required for Joining:</label>
                    <input type="text" id="timeRequiredForJoining " className='hghgch' name="timeRequiredForJoining" onChange={handleChange} />                     </div>
                <div className="input-group">
                    <label htmlFor="currentCTC">Current CTC:</label>
                    <input type="text" id="currentCTC " className='hghgch' name="currentCTC" onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="expectedCTC">Expected CTC:</label>
                    <input type="text" id="expectedCTC " className='hghgch' name="expectedCTC" onChange={handleChange} />
                </div>

                <div className="input-group">
                    <label htmlFor="status">Status:</label>
                    <select className='hghgch' id="status" name="status" onChange={handleChange} required>
                        <option value="Selected">Selected</option>
                        <option value="On Hold">On Hold</option>
                        <option value=" Rejected"> Rejected</option>

                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="interviewerName"> 1st Interviewer Name</label>
                    <input type="text" id="interviewerName " className='hghgch' name="interviewerName" onChange={handleChange} />
                </div>
            </div>

            <form encType="multipart/form-data">
                <label htmlFor="fileInput">Choose a file:</label>
                <input type="file" id="fileInput" name="file" onChange={handleFileChange} required />
                <br />
                <button type="button" className='uyhyy ' onClick={uploadFile}>Upload</button>
            </form>

            {/* <div id="responseContainer">{response}</div> */}
        </div>
    );
}

export default AddCandidate;