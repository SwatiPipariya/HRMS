import React from 'react'
import './Navbar.css'
import { FiSettings, FiBell, FiSearch  } from "react-icons/fi"
import { CiLogout } from "react-icons/ci";
import TimeAndDate from "../calander/TimeAndDate";
function Navbar() { 


    const handleButtonClick = () => {
      console.log('run')

        requestNotificationPermission();
      };
      
      
      // const requestNotificationPermission = () => {
      //   console.log('hold')
        
      //   if (Notification.permission !== 'granted') {
      //     console.log('permission denied')
      //     Notification.requestPermission().then((permission) => {
      //       if (permission === 'granted') {
      //         showBrowserNotification();
      //       }
      //     });
      //   } else {
      //     console.log('permission')

      //     showBrowserNotification();
      //   }
      // };
      
      

      const requestNotificationPermission = () => {
        console.log('hold');
    
        if (Notification.permission !== 'granted') {
            console.log('permission denied');
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    showBrowserNotification();
                } else {
                    console.log('Notification permission denied');
                }
            }).catch(err => {
                console.error('Error requesting notification permission:', err);
            });
        } else {
            console.log('permission granted');
            showBrowserNotification();
        }
    };

      const showBrowserNotification = () => {
        const notification = new Notification('React Notification', {
          body: 'This is a notification from React!',
        });
      
        // Close the notification after a certain time (e.g., 3 seconds)
        // setTimeout(() => {
        //   notification.close();
        // }, 3000);
      };
    


    const handleLogout = () => {

    // const loggedIn = localStorage.getItem("isLoggedIn");

        // Logout action: set login status to false in local storage and redirect to login page



// ..........................................................................................................................................................



// ..........................................................................................................................................................






      
        localStorage.clear(); // Remove the login value from localStorage
        window.location.href = "/login"; // Redirect to login page
      };
    return (
        
        <div class="header">
            <span id="magnify">
                <button id="tggButton">
                   <FiSearch className='srch' />
                </button>
                <i class="fa fa-search" id="mkijn" aria-hidden="true"></i>
                <input type="text" id="searchin" placeholder="Search Dashboard" />
            </span>
          
            <div className='rght-side'>
            <div style={{width:'max-content'  , marginRight:'20px'}}>
                    <TimeAndDate/>
                </div>
            <div id="image_box"></div>
            <FiSettings className='srch'/>
            <FiBell className='fbell'/>
            <CiLogout className='logoutIcon' onClick={handleLogout} />
            {/* <CiLogout className='logoutIcon' onClick={handleButtonClick} /> */}

{/* <h4 onClick={handelRefresh}>refresh</h4> */}
            </div>
        </div>
    )
}

export default Navbar