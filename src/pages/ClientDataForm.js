// SalesClientForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ClientDataForm = () => {
    const [formData, setFormData] = useState({
        Month: '',
        ClientsName: '',
        ClientRegionType: '',
        ExternalSPOC: '',
        ClientOnboardedBy: '',
        ClientStatus: '',
        LeadType: '',
        ServiceType: '',
        SubServiceType: '',
        LastFollowUp: '',
        Stage1Note: '',
        Stage2Note: '',
        FinalRemark: '',
        // Add other fields here
    });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Adjust the API endpoint URL based on your server configuration
            const response = await axios.post('http://192.168.2.11:5050/addclients', formData);

            console.log('Response:', response.data);

            // Reset the form after successful submission
            setFormData({
                Month: '',
                ClientsName: '',
                ClientRegionType: '',
                ExternalSPOC: '',
                ClientOnboardedBy: '',
                ClientStatus: '',
                LeadType: '',
                ServiceType: '',
                SubServiceType: '',
                LastFollowUp: '',
                Stage1Note: '',
                Stage2Note: '',
                FinalRemark: '',
                // Reset other fields here
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-md p-8" style={{ width: '80%' ,backgroundColor:'#d8e0ff'}}>
                <h2 className="text-2xl font-bold mb-6">Sales Client Form</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>

                        <div className="mb-4  " style={{ width: '30%' }} >
                            <label htmlFor="Month" className="block text-sm font-medium text-gray-600">
                                Month:
                            </label>
                            <input
                                type="date"
                                id="Month"
                                name="Month"
                                value={formData.Month}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                required
                            />
                        </div>
                        <div className="mb-4 njdgd" style={{ width: '30%' }} >
                            <label htmlFor="ClientsName" className="block text-sm font-medium text-gray-600">
                                Client's Name:
                            </label>
                            <input
                                required
                                type="text"
                                id="ClientsName"
                                name="ClientsName"
                                value={formData.ClientsName}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="input-group " style={{ width: '30%' }}  >
                            <label htmlFor="ClientRegionType">Client Region Type:</label>
                            <select className='hghgch' id="ClientRegionType" name="ClientRegionType" onChange={handleInputChange} required>
                                <option value="">Select Option</option>
                                <option value="International">International</option>
                                <option value="Domastic">Domastic</option>
                                <option value=" Rejected"> Rejected</option>

                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>

                        <div className="mb-4" style={{ width: '47%' }} >
                            <label htmlFor="ExternalSPOC" className="block text-sm font-medium text-gray-600">
                                External SPOC:
                            </label>
                            <input
                                required
                                type="text"
                                id="ExternalSPOC"
                                name="ExternalSPOC"
                                value={formData.ExternalSPOC}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="input-group" style={{ width: '47%' }} >
                            <label htmlFor="ClientOnboardedBy">Client Onboarded By:</label>
                            <select className='hghgch' id="ClientOnboardedBy" name="ClientOnboardedBy" onChange={handleInputChange} required>
                                <option value="">Select Option</option>
                                <option value="Dheeraj Saxena">Dheeraj Saxena</option>
                                <option value="Rida Abbasi">Rida Abbasi</option>
                                <option value=" Nupendra Singh"> Nupendra Singh</option>

                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>

                        <div className="input-group" style={{ width: '30%' }}>
                            <label htmlFor="ClientStatus">Client Status:</label>
                            <select className='hghgch' id="ClientStatus" name="ClientStatus" onChange={handleInputChange} required>
                                <option value="">Select Option</option>
                                <option value="Lost">Lost</option>
                                <option value="Prospect">Prospect</option>
                                <option value=" On Board"> On Board</option>

                            </select>
                        </div>

                        <div className="input-group" style={{ width: '30%' }}>
                            <label htmlFor="LeadType">Lead Type:</label>
                            <select className='hghgch' id="LeadType" name="LeadType" onChange={handleInputChange} required>
                                <option value="">Select Option</option>
                                <option value="Converted">Converted</option>
                                <option value="Cold">Cold</option>
                                <option value=" Hot"> Hot</option>
                                <option value="Warm">Warm</option>
                                <option value=" Dead"> Dead</option>


                            </select>
                        </div>

                        <div className="input-group" style={{ width: '30%' }}>
                            <label htmlFor="ServiceType">Service Type :</label>
                            <select className='hghgch' id="ServiceType" name="ServiceType" onChange={handleInputChange} required>
                                <option value="">Select Option</option>
                                <option value="BPO">BPO</option>
                                <option value="IT">IT</option>
                                <option value=" AI/ML"> AI/ML</option>
                                <option value="Digital Marketing">Digital Marketing</option>


                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>

                        <div className="mb-4" style={{ width: '47%' }}>
                            <label htmlFor="SubServiceType" className="block text-sm font-medium text-gray-600">
                                Sub Service Name:
                            </label>
                            <input
                                type="text"
                                id="SubServiceType"
                                name="SubServiceType"
                                value={formData.SubServiceType}
                                onChange={handleInputChange}
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>
                        <div className="mb-4" style={{ width: '47%' }}>
                            <label htmlFor="LastFollowUp" className="block text-sm font-medium text-gray-600">
                                Last Follow Up:
                            </label>
                            <input
                                required
                                type="date"
                                id="LastFollowUp"
                                name="LastFollowUp"
                                value={formData.LastFollowUp}
                                onChange={handleInputChange}
                                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                        </div>

                    </div>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        
                    <div className="mb-4" style={{width:'30%'}}>
                        <label htmlFor="Stage1Note" className="block text-sm font-medium text-gray-600">
                            Stage 1 Note:
                        </label>
                        <input
                            required
                            type="text"
                            id="Stage1Note"
                            name="Stage1Note"
                            value={formData.Stage1Note}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                    </div>
                    <div className="mb-4" style={{width:'30%'}}>
                        <label htmlFor="Stage2Note" className="block text-sm font-medium text-gray-600">
                            Stage 2 Note:
                        </label>
                        <input
                            required
                            type="text"
                            id="Stage2Note"
                            name="Stage2Note"
                            value={formData.Stage2Note}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                            />
                    </div>
                    <div className="input-group" style={{width:'30%'}}>
                        <label htmlFor="FinalRemark">Final Remark :</label>
                        <select className='hghgch' id="FinalRemark" name="FinalRemark" onChange={handleInputChange} required>
                            <option value="">Select Option</option>
                            <option value="On Going">On Going</option>
                            <option value="Pending">Pending</option>
                            <option value="Close"> Close</option>


                        </select>
                    </div>
                    </div>
                    {/* Add other form fields here */}
                    <div style={{width:'100%' , display:'flex',justifyContent:'center'}}>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300" style={{padding:'10px 20px' , marginTop:'30px'}}
                        >
                        Submit
                    </button>
                            </div>
                </form>
            </div>
        </div>
    );
};

export default ClientDataForm;
