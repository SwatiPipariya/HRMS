
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';



const options = [
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Bengali', label: 'Bengali' },
    { value: 'Telugu', label: 'Telugu' },
    { value: 'Marathi', label: 'Marathi' },
    { value: 'Tamil', label: 'Tamil' },
    { value: 'Urdu', label: 'Urdu' },
    { value: 'Gujarati', label: 'Gujarati' },
    { value: 'Kannada', label: 'Kannada' },
    { value: 'Odia', label: 'Odia (Oriya)' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'Punjabi', label: 'Punjabi' },
    { value: 'Assamese', label: 'Assamese' },
    { value: 'Maithili', label: 'Maithili' },
    { value: 'Santali', label: 'Santali' },
    { value: 'Kashmiri', label: 'Kashmiri' },
    { value: 'Nepali', label: 'Nepali' },
    { value: 'Konkani', label: 'Konkani' },
    { value: 'Sindhi', label: 'Sindhi' },
    { value: 'Manipuri', label: 'Manipuri' },
    { value: 'Dogri', label: 'Dogri' },
];

export default function MDBData() {


    const [selectedValues, setSelectedValues] = useState(null);


    const handleSelectedValuesChange = (selectedOptions) => {
        setSelectedValues(selectedOptions);
    };

    const [formData, setFormData] = useState({
        empId: '',
        name: '',
        empStatus: '',
        location: '',
        designation: '',
        department: '',
        process: '',
        lob: '',
        doj: '',
        lastWorkingDay: '',
        trainingStart: '',
        trainingEnd: '',
        onFloorDate: '',
        floorStatus: 'On Floor',
        tenure: '',
        tenureBucket: 'active',
        WorkingMode: '',
        EmployeeType: '',
        EmployementType: 'active',
        supervisorL1: 'active',
        supervisorL2: 'active',
        panNumber: '',
        aadharNumber: '',
        gender: '',
        dob: '',
        age: '',
        ageGroup: 'active',
        fatherHusbandName: '',
        guardianName: '', // Reset new field here
        guardianNumber: '', // Reset new field here
        reference1: '', // Reset new field here
        reference1No: '', // Reset new field here
        maritalStatus: '', // Reset new field here
        qualification: '', // Reset new field here
        eduCategory: '',
        currentPursuing: '',
        completionYear: '',
        university: '', // Added university field
        religion: '', // Added religion field
        bloodGroup: '', // Added bloodGroup field
        nationality: '',
        category: '',
        officialEmail: '',
        personalEmail: '',
        contactNumber: '',
        emergencyContact: '',
        fullPresentAddress: '',
        fullPermanentAddress: '',
        fresher: '',
        previousOrganization: 'NA',
        totalExperience: 'NA',
        source: '',
        sourceName: '',
        // languageKnows: '',
        differentlyAbled: '',
        broadCategoryOfDisability: 'NA',
        specificTypeOfDisability: 'NA',
        uanApplicability: '',
        esiApplicability: '',
        uanNo: 'NA',
        esiNo: 'NA',
        bankName: '',
        bankBranch: '',
        bankAccountNo: '',
        ifscCode: '',
        ctc: '',
        inhandSalary: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //    const selectedValuesString = JSON.stringify(selectedValues);
            const selectedValuesString = selectedValues.map(item => item.value).join(',');
            const response = await axios.post('http://192.168.2.11:5050/mdb/data/insert', {
                ...formData,
                languageKnows: selectedValuesString
            });
            console.log('Response:', response.data);
            setFormData({
                empId: '',
                name: '',
                empStatus: '',
                location: '',
                designation: '',
                department: '',
                process: '',
                lob: '',
                doj: '',
                lastWorkingDay: '',
                trainingStart: '',
                trainingEnd: '',
                onFloorDate: '',
                floorStatus: 'On Floor',
                tenure: '',
                tenureBucket: 'active',
                WorkingMode: '',
                EmployeeType: '',
                EmployementType: 'active',
                supervisorL1: 'active',
                supervisorL2: 'active',
                panNumber: '',
                aadharNumber: '',
                gender: '',
                dob: '',
                age: '',
                ageGroup: 'active',
                fatherHusbandName: '',
                guardianName: '', // Reset new field here
        guardianNumber: '', // Reset new field here
        reference1: '', // Reset new field here
        reference1No: '', // Reset new field here
                maritalStatus: '', // Reset new field here
                qualification: '', // Reset new field here
                eduCategory: '',
                currentPursuing: '',
                completionYear: '',
                university: '', // Added university field
                religion: '', // Added religion field
                bloodGroup: '', // Added bloodGroup field
                nationality: '',
                category: '',
                officialEmail: '',
                personalEmail: '',
                contactNumber: '',
                emergencyContact: '',
                fullPresentAddress: '',
                fullPermanentAddress: '',
                fresher: '',
                previousOrganization: 'NA',
                totalExperience: 'NA',
                source: '',
                sourceName: '',
                // languageKnows: '',
                differentlyAbled: '',
                broadCategoryOfDisability: 'NA',
                specificTypeOfDisability: 'NA',
                uanApplicability: '',
                esiApplicability: '',
                uanNo: 'NA',
                esiNo: 'NA',
                bankName: '',
                bankBranch: '',
                bankAccountNo: '',
                ifscCode: '',
                ctc: '',
                inhandSalary: '',

            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Employee Information Form</h2>

            <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <form onSubmit={handleSubmit} className='dfea'>
                    <div className="grid grid-cols-3 ss5d pt-6" >

                        <div>

                            <label htmlFor="empId">Emp ID</label>
                            <input className='hghgch' type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} />

                        </div>
                        <div>

                            <label htmlFor="name">Name</label>

                            <input className='hghgch' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>




                            <label htmlFor="empStatus">empStatus</label>
                            <select className='hghgch' type="text" id="empStatus" name="empStatus" value={formData.empStatus} onChange={handleChange}>
                                <option value="">Select Option</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>


                    <div className=' pt-6'>


                        <label htmlFor="location">Location</label>
                        <input className='hghgch' type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-3 ss5d pt-6" >
                        <div>


                            <label htmlFor="designation">Designation</label>
                            <input className='hghgch' type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
                        </div>
                        <div>


                            <label htmlFor="department">Department</label>
                            <input className='hghgch' type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
                        </div>
                        <div>

                            <label htmlFor="process">Process</label>
                            <input className='hghgch' type="text" id="process" name="process" value={formData.process} onChange={handleChange} />
                        </div>
                    </div>
                    <div className=' pt-6'>


                        <label htmlFor="lob">LOB</label>
                        <input className='hghgch' type="text" id="lob" name="lob" value={formData.lob} onChange={handleChange} />
                    </div>


                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="doj">DOJ</label>
                            <input className='hghgch' type="date" id="doj" name="doj" value={formData.doj} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="lastWorkingDay">Last working Day</label>
                            <input className='hghgch' type="date" id="lastWorkingDay" name="lastWorkingDay" value={formData.lastWorkingDay} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="trainingStart">Training Start</label>
                            <input className='hghgch' type="date" id="trainingStart" name="trainingStart" value={formData.trainingStart} onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="trainingEnd">Training End</label>
                        <input className='hghgch' type="date" id="trainingEnd" name="trainingEnd" value={formData.trainingEnd} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="onFloorDate">On Floor Date</label>
                            <input className='hghgch' type="date" id="onFloorDate" name="onFloorDate" value={formData.onFloorDate} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="floorStatus">Floor Status</label>
                            <select className='hghgch' id="floorStatus" name="floorStatus" value={formData.floorStatus} onChange={handleChange}>
                                <option value="">Select Option</option>
                                <option value="Active">Active</option>
                                <option value="OJT">OJT</option>
                                <option value="On floor">On floor</option>
                            </select>
                        </div>


                        <div>
                            <label htmlFor="tenure">Tenure</label>
                            <input className='hghgch' type="text" id="tenure" name="tenure" value={formData.tenure} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tenureBucket">Tenure Bucket</label>
                        <select className='hghgch' id="tenureBucket" name="tenureBucket" value={formData.tenureBucket} onChange={handleChange}>
                            <option value="active">On Floor</option>
                            <option value="inactive">In Training</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="WorkingMode">Working Mode</label>
                            {/* <input className='hghgch' type="text" id="WorkingMode" name="WorkingMode" value={formData.WorkingMode} onChange={handleChange} /> */}
                            <select className='hghgch' id="WorkingMode" name="WorkingMode" value={formData.WorkingMode} onChange={handleChange}>
                                <option value="WFH">WFH</option>
                                <option value="WFO">WFO</option>
                                <option value="Hybrid">Hybrid</option>


                            </select>
                        </div>
                        <div>
                            <label htmlFor="onFloorDate">On Floor Date</label>
                            <input className='hghgch' type="text" id="onFloorDate" name="onFloorDate" value={formData.onFloorDate} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="EmployeeType">Employee Type</label>
                            <select className='hghgch' id="EmployeeType" name="EmployeeType" value={formData.EmployeeType} onChange={handleChange}>
                                <option value="">Select Options</option>
                                <option value="Agent">Agent</option>
                                <option value="Intern">Intern</option>
                                <option value="IT Intern">IT Intern</option>
                                <option value="Ops Intern">Ops Intern</option>
                                <option value="Shared Support">Shared Support</option>
                                <option value="Support">Support</option>

                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="EmployementType">Employement Type</label>
                        <select className='hghgch' id="EmployementType" name="EmployementType" value={formData.EmployementType} onChange={handleChange}>
                            <option value=" ">Select Option</option>

                            <option value="FT-Domestic">FT-Domestic</option>
                            <option value="FT-International">FT-International</option>
                            <option value="PT-Domastic">PT-Domastic</option>
                            <option value="PT-International">PT-International</option>

                        </select>
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="supervisorL1">Supervisor L1</label>
                            <select className='hghgch' id="supervisorL1" name="supervisorL1" value={formData.supervisorL1} onChange={handleChange}>
                                <option value="active">On Floor</option>
                                <option value="inactive">In Training</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="supervisorL2">Supervisor L2</label>
                            <select className='hghgch' id="supervisorL2" name="supervisorL2" value={formData.supervisorL2} onChange={handleChange}>
                                <option value="active">On Floor</option>
                                <option value="inactive">In Training</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="panNumber">Pan Number</label>
                            <input className='hghgch' type="text" id="panNumber" name="panNumber" value={formData.panNumber} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="aadharNumber">Aadhar Number</label>
                        <input className='hghgch' type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="gender">Gender</label>
                            {/* <input className='hghgch' type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} /> */}

                            <select className='hghgch' id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="Male">Mala</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dob">DOB</label>
                            <input className='hghgch' type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="age">Age</label>
                            <input className='hghgch' type="text" id="age" name="age" value={formData.age} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="ageGroup">Age Group</label>
                        <select className='hghgch' id="ageGroup" name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                            <option value="active">On Floor</option>
                            <option value="inactive">In Training</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="fatherHusbandName">Father HusbandName</label>
                            <input type="text" className='hghgch' id="fatherHusbandName" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="guardianName">Guardian Name</label>
                            <input type="text" className='hghgch' id="guardianName" name="guardianName" value={formData.guardianName} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="guardianNumber">Guardian No :</label>
                            <input type="text" className='hghgch' id="guardianNumber" name="guardianNumber"  value={formData.guardianNumber} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="reference1">Reference 1</label>
                            <input type="text" id="reference1" className='hghgch' name="reference1" onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="reference1No">Reference 1 No :</label>
                            <input type="text" id="reference1No" className='hghgch' name="reference1No" onChange={handleChange} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="maritalStatus">Marital Status</label>

                        <select className='hghgch' id="maritalStatus" name="maritalStatus" onChange={handleChange}>
                            <option value="">Select Option</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="qualification">Qualification</label>
                            <input type="text" id="qualification" className='hghgch' name="qualification" onChange={handleChange} />
                        </div>

                        <div>
                            {/* <label htmlFor="eduCategory">Edu Category</label>
                  <input type="text" id="eduCategory" className='hghgch' name="eduCategory" />
                     */}
                            <label htmlFor="eduCategory">Edu Category</label>
                            <select className='hghgch' id="eduCategory" name="eduCategory" value={formData.eduCategory} onChange={handleChange}>
                                <option value="">Select Options</option>
                                <option value="Under Graduation">Under Graduation</option>
                                <option value="Graduation">Graduation</option>
                                <option value="High School">High School</option>
                                <option value="Higher Secondary">Higher Secondary</option>
                                <option value="Middle School">Middle School</option>
                                <option value="PhD">PhD</option>
                                <option value="Post Graduation">Post Graduation</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="eduCategory">Edu Category</label>
                            <select className='hghgch' id="eduCategory" name="eduCategory" value={formData.eduCategory} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="On Floor">On Floor</option>
                                <option value="In Training">In Training</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="currentPursuing"> Current Pursuing</label>
                            <select className='hghgch' id="currentPursuing" name="currentPursuing" value={formData.currentPursuing} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="completionYear">Completion Year</label>
                            <input className='hghgch' type="date" id="completionYear" name="completionYear" value={formData.completionYear} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="university">University</label>
                            <input className='hghgch' type="date" id="university" name="university" value={formData.university} onChange={handleChange} />
                        </div>

                        {/* <div>
                            <label htmlFor="religion">Religion</label>
                            <input className='hghgch' type="date" id="religion" name="religion" value={formData.religion} onChange={handleChange} />
                        </div> */}

                        <div>
                            <label htmlFor="religion">Religion</label>
                            <select className='hghgch' id="religion" name="religion" value={formData.religion} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="Christianity">Christianity</option>
                                <option value="Islam">Islam</option>
                                <option value="Hinduism">Hinduism</option>
                                <option value="Judaism">Judaism</option>
                                <option value="Sikhism">Sikhism</option>
                                <option value="Jainism">Jainism</option>
                                <option value="Taoism">Taoism</option>
                                <option value="Shinto">Shinto</option>
                                <option value="Bahá'í Faith">Bahá'í Faith</option>
                                <option value="Zoroastrianism">Zoroastrianism</option>
                            </select>
                        </div>



                        <div>
                            <label htmlFor="bloodGroup">Blood Group </label>
                            <select className='hghgch' id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="nationality">Nationality</label>
                        <select className='hghgch' id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Australian">Australian</option>
                            <option value="German">German</option>
                            <option value="French">French</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Indian">Indian</option>
                            <option value="Brazilian">Brazilian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Russian">Russian</option>
                            <option value="Spanish">Spanish</option>
                            <option value="South African">South African</option>
                            <option value="Nigerian">Nigerian</option>
                            <option value="Egyptian">Egyptian</option>
                            <option value="Turkish">Turkish</option>
                            <option value="Korean">Korean</option>
                            <option value="Saudi Arabian">Saudi Arabian</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="category">Category</label>
                            <select className='hghgch' id="category" name="category" value={formData.category} onChange={handleChange}>
                                <option value="">Select Option</option>
                                <option value="General">General</option>
                                <option value="ST">ST</option>
                                <option value="SC">SC</option>
                                <option value="OBC">OBC</option>
                                <option value="Other">Other</option>

                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="officialEmail">Official Email</label>
                            <input className='hghgch' type="text" id="officialEmail" name="officialEmail" value={formData.officialEmail} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="personalEmail">Personal Email</label>
                            <input className='hghgch' type="text" id="personalEmail" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input className='hghgch' type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                    </div>
                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>
                            <label htmlFor="emergencyContact">Emergency Contact :</label>
                            <input type="text" className='hghgch' id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="fullPresentAddress">Full Present Address:</label>
                            <input type="text" className='hghgch' id="fullPresentAddress" name="fullPresentAddress" value={formData.fullPresentAddress} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="fullPermanentAddress">Full Permanent Address:</label>
                            <input type="text" className='hghgch' id="fullPermanentAddress" name="fullPermanentAddress" value={formData.fullPermanentAddress} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        {/* <input type="text" className='hghgch' id="fresher" name="fresher" value={formData.fresher} onChange={handleChange} /> */}

                        <label htmlFor="fresher">Fresher:</label>
                        <select className='hghgch' id="fresher" name="fresher" value={formData.fresher} onChange={handleChange}>
                            <option value="">Select Option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 ss5d" >
                        {/* <div id='expd'>

                        <div>
                            <label htmlFor="previousOrganization">Previous Organization:</label>
                            <input type="text" className='hghgch' id="previousOrganization" name="previousOrganization" value={formData.previousOrganization} onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor="totalExperience">Total Experience:</label>
                            <input type="text" className='hghgch' id="totalExperience" name="totalExperience" value={formData.totalExperience} onChange={handleChange} />
                        </div>
                        </div> */}
                        {formData.fresher === 'No' && ( // Render expd div only when fresher value is 'No'
                            <div id='expd' className="grid grid-cols-2 ss5d">
                                <div>
                                    <label htmlFor="previousOrganization">Previous Organization:</label>
                                    <input type="text" className='hghgch' id="previousOrganization" name="previousOrganization" value={formData.previousOrganization} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="totalExperience">Total Experience:</label>
                                    <input type="text" className='hghgch' id="totalExperience" name="totalExperience" value={formData.totalExperience} onChange={handleChange} />
                                </div>
                            </div>
                        )}

                        <div>
                            <label htmlFor="source">Source:</label>
                            {/* <input type="text" className='hghgch' id="source" name="source" value={formData.source} onChange={handleChange} /> */}
                            <select className='hghgch' id="source" name="source" value={formData.source} onChange={handleChange} required>
                                <option value="">Select an option</option>
                                <option value="Campus/College">Campus/College</option>
                                <option value="Employee referral">Employee referral</option>
                                <option value="Hiring Counselor">Hiring Counselor</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Job Portal">Job Portal</option>
                                <option value="Walkin">Walkin</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="sourceName">Source Name:</label>
                        <input type="text" className='hghgch' id="sourceName" name="sourceName" value={formData.sourceName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="languageKnows">Language Known:</label>

                        {/* <input type="text" className='hghgch' id="languageKnows" name="languageKnows" value={formData.languageKnows} onChange={handleChange} /> */}
                        <Select id="languageKnows" name="languageKnows" onChange={handleSelectedValuesChange}
                            defaultValue={[options[2], options[3]]}
                            isMulti
                            // name="colors"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />

                    </div>
                    <div className="grid grid-cols-2 ss5d" >
                        <div>
                            <label htmlFor="differentlyAbled">Differently Abled:</label>
                            {/* <input type="text" className='hghgch' id="differentlyAbled" name="differentlyAbled" value={formData.differentlyAbled} onChange={handleChange} /> */}

                            <select className='hghgch' id="differentlyAbled" name="differentlyAbled" value={formData.differentlyAbled} onChange={handleChange} required>
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>

                        </div>
                        {formData.differentlyAbled === 'Yes' && (
                            <div className="grid grid-cols-2 ss5d">
                                <div>
                                    <label htmlFor="broadCategoryOfDisability">Broad Category of Disability:</label>
                                    <input type="text" className='hghgch' id="broadCategoryOfDisability" name="broadCategoryOfDisability" value={formData.broadCategoryOfDisability} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="specificTypeOfDisability">Specific Type of Disability:</label>
                                    <input type="text" className='hghgch' id="specificTypeOfDisability" name="specificTypeOfDisability" value={formData.specificTypeOfDisability} onChange={handleChange} />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="uanApplicability">UAN Applicability:</label>
                        {/* <input type="text" className='hghgch' id="uanApplicability" name="uanApplicability" value={formData.uanApplicability} onChange={handleChange} /> */}
                        <select className='hghgch' id="uanApplicability" name="uanApplicability" value={formData.uanApplicability} onChange={handleChange} required>
                            <option value="">Select an option</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>

                        </select>

                    </div>

                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>

                            <label htmlFor="esiApplicability">ESI Applicability:</label>
                            {/* <input type="text" className='hghgch' id="esiApplicability" name="esiApplicability" value={formData.esiApplicability} onChange={handleChange} /> */}

                            <select className='hghgch' id="esiApplicability" name="esiApplicability" value={formData.esiApplicability} onChange={handleChange} required>
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>

                        </div>
                        {formData.uanApplicability === 'Yes' && (
                            <div>

                                <label htmlFor="uanNo">UAN No:</label>
                                <input type="text" className='hghgch' id="uanNo" name="uanNo" value={formData.uanNo} onChange={handleChange} />

                            </div>
                        )}
                        {formData.esiApplicability === 'Yes' && (
                            <div>
                                <label htmlFor="esiNo">ESI No:</label>
                                <input type="text" className='hghgch' id="esiNo" name="esiNo" value={formData.esiNo} onChange={handleChange} />

                            </div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="bankName">Bank Name:</label>
                        <select className='hghgch' id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} required>
                            <option value="">Select an option</option>
                            <option value="State Bank of India">State Bank of India</option>
                            <option value="Punjab National Bank">Punjab National Bank</option>
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="ICICI Bank">ICICI Bank</option>
                            <option value="Axis Bank">Axis Bank</option>
                            <option value="Canara Bank">Canara Bank</option>
                            <option value="Bank of Baroda">Bank of Baroda</option>
                            <option value="Union Bank of India">Union Bank of India</option>
                            <option value="Bank of India">Bank of India</option>
                            <option value="IDBI Bank">IDBI Bank</option>
                            <option value="Central Bank of India">Central Bank of India</option>
                            <option value="Indian Bank">Indian Bank</option>
                            <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                            <option value="IndusInd Bank">IndusInd Bank</option>
                            <option value="Yes Bank">Yes Bank</option>
                            <option value="Federal Bank">Federal Bank</option>
                            <option value="Punjab & Sind Bank">Punjab & Sind Bank</option>
                            <option value="Karur Vysya Bank">Karur Vysya Bank</option>
                            <option value="RBL Bank">RBL Bank</option>
                            <option value="South Indian Bank">South Indian Bank</option>

                        </select>

                    </div>


                    <div className="grid grid-cols-3 ss5d  pt-6" >
                        <div>

                            <label htmlFor="bankBranch">Bank Branch:</label>
                            <input type="text" className='hghgch' id="bankBranch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} />

                        </div>
                        <div>

                            <label htmlFor="bankAccountNo">Bank Account No:</label>
                            <input type="text" className='hghgch' id="bankAccountNo" name="bankAccountNo" value={formData.bankAccountNo} onChange={handleChange} />

                        </div>
                        <div>

                            <label htmlFor="ifscCode">IFSC Code:</label>
                            <input type="text" className='hghgch' id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
                        </div>
                    </div>
                    <div>

                        <label htmlFor="ctc">CTC:</label>
                        <input type="text" className='hghgch' id="ctc" name="ctc" value={formData.ctc} onChange={handleChange} />

                    </div>
                    <div>

                        <label htmlFor="inhandSalary">Inhand Salary:</label>
                        <input type="text" className='hghgch' id="inhandSalary" name="inhandSalary" value={formData.inhandSalary} onChange={handleChange} />

                    </div>

                    <button className='epicOne' type="submit">Submit</button>
                </form>
            </div>
        </div>

    );
}







