import React , { useState, useEffect }  from  'react'
import './Cards.css'
import { BiSolidUser, BiSolidData } from 'react-icons/bi'
import { GiProgression } from 'react-icons/gi'
import {AiFillFileText} from 'react-icons/ai'
import axios from 'axios';




function Cards() {

    const [userData, setUserData] = useState({ count: 0 });
//   const [progressData, setProgressData] = useState({ count: 0 });
//   const [fileData, setFileData] = useState({ count: 0 });
//   const [databaseData, setDatabaseData] = useState({ count: 0 });

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        // Make separate requests for each count
        const [userResponse
            // , progressResponse, fileResponse, databaseResponse
        ] = await Promise.all([
          axios.get('http://192.168.2.11:5050/users/count'),
          // Add similar endpoints for progress, file, and database
        ]);

        // Update the state with the counts
        setUserData(userResponse.data);
        // setProgressData(progressResponse.data);
        // setFileData(fileResponse.data);
        // setDatabaseData(databaseResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 

    return (
        <>
            <div className="card">
                <div className="bulb-container">
                    {/* -----First Bulb------ */}
                    <div className="bulb-one">
                        <div className='fir-blb'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <BiSolidUser className='ic-one' />
                            </div>
                            <p className='det-blb big'>User </p>
                            <p className='det-blb'>{userData.count}</p>
                        </div>
                    </div>
                    {/* -----Second Bulb-------- */}
                    <div className="bulb-two">
                        <div className='fir-blb'>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <GiProgression className='ic-one' />
                            </div>
                            <p className='det-blb big'>Progress </p>
                            <p className='det-blb'>35.12%</p>
                        </div>
                    </div>
                    {/* -------Third Bulb--------- */}
                    <div className="bulb-one" style={{    backgroundImage: 'linear-gradient(114deg, #bb40ff, #ff00c2)'}}>
                        <div className='fir-blb'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <AiFillFileText className='ic-one' />
                            </div>
                            <p className='det-blb big'>File </p>
                            <p className='det-blb'>94%</p>
                        </div>

                    </div>
                    {/* ----------Fourth Bulb------ */}
                    <div className="bulb-two" style={{    backgroundImage: 'linear-gradient(114deg, rgb(244 255 64), rgb(255 120 0))'}}>
                        <div className='fir-blb'>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <BiSolidData className='ic-one' />
                            </div>
                            <p className='det-blb big'>DataBase </p>
                            <p className='det-blb'>52%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards


