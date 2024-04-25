// Check Readme File 

import { NavLink } from "react-router-dom";
// import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { FaBars, FaHome, FaUser, FaUsers, FaUserTie, FaUserPlus, FaCalendarAlt, FaBook, FaUserEdit, FaUserCheck, FaUserSecret } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
import io from 'socket.io-client';
// import addNotification from 'react-push-notification';
import { AiFillHeart } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
import { FaWpforms } from "react-icons/fa"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import AddCandidate from "../../pages/AddCandidate";
import Tone from '../../Ringtone/Candidate.mp3'
import '../../App.css'
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  // {
  //   path: "/AddUsers",
  //   name: "Add Agents",
  //   icon: <FaUser />,
  // }, 
  // {
  //   path: "/userlist",
  //   name: "Users",
  //   icon: <FaUser />,
  // },
  // {
  //   path: "/messages",
  //   name: "Attandance",
  //   icon: <MdMessage />,
  // },
  // {
  //   path: "/attendence",
  //   name: "Attendance",
  //   icon: <FaBook />,
  // },
  // {
  //   path: "/applyleave",
  //   name: "Apply Leave",
  //   icon: <FaCalendarAlt />,
  // },
  // {
  //   path: "/leaveapproval",
  //   name: "Approve Leave",
  //   icon: <AiFillHeart />,

  // },
  {
    path: "/AddCandidate",
    name: "AddCandidate",
    icon: <FaUserPlus />,
  },
  {
    path: "/AddUsers",
    name: "Add User",
    icon: <FaUserPlus />,
  },
  {
    path: "/candidateList",
    name: "Candidate List",
    icon: <FaUser id="CandidateAdded" />,
  },
  // {
  //   path: "/visitor",
  //   name: "Visitor Form",
  //   icon: <FaUserTie />,
  // },
  {
    path: "/InterviewAssignList",
    name: "Interview Assigned",
    icon: <FaUserEdit className="InterviewUpdate" />,
  },

  {
    path: "/view/gsheet",
    name: "View G-Sheet",
    icon: <FaUserSecret />,
  },
  //   {
  //     path: "/file-manager",
  //     name: "File Manager",
  //     icon: <AiTwotoneFileExclamation />,
  //     subRoutes: [
  //       {
  //         path: "/settings/profile",
  //         name: "Profile ",
  //         icon: <FaUser />,
  //       },
  //       {
  //         path: "/settings/2fa",
  //         name: "2FA",
  //         icon: <FaLock />,
  //       },
  //       {
  //         path: "/settings/billing",
  //         name: "Billing",
  //         icon: <FaMoneyBill />,
  //       },
  //     ],
  //   },
  {
    path: "/mdb",
    name: "Master Data",
    icon: <FaWpforms />,
  },
  //   {
  //     path: "/settings",
  //     name: "Settings",
  //     icon: <BiCog />,
  //     exact: true,
  //     subRoutes: [
  //       {
  //         path: "/settings/profile",
  //         name: "Profile ",
  //         icon: <FaUser />,
  //       },
  //       {
  //         path: "/settings/2fa",
  //         name: "2FA",
  //         icon: <FaLock />,
  //       },
  //       {
  //         path: "/settings/billing",
  //         name: "Billing",
  //         icon: <FaMoneyBill />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/saved",
  //     name: "Saved",
  //     icon: <AiFillHeart />,
  //   },
  {
    path: "/calling",
    name: "CSA",
    icon: <FaUserSecret />,
  },
  {
    path: "/final/candidate/list",
    name: "Final Candidate",
    icon: <FaUserCheck />,
    // subRoutes: [
    //   {
    //     path: "/final/candidate/list/CandidatesRemarks",
    //     name: "With Remark",
    //     icon: <FaUserCheck />
    //   },
    //   {
    //     path: "/final/candidate/list",
    //     name: "Without Remark",
    //     icon: <FaUserTie />
    //   }
    // ]
  },
  {
    path: "/UpdatedDashboard",
    name: "Dashboard",
    icon: <FaUserSecret />,
  },
];

const HRSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };
  useEffect(() => {
    // Set up a Socket.IO connection
    const socket = io('http://192.168.2.11:5050');

    socket.on('connect', () => {
      console.log('Connected to socket');
    });



    socket.on('newCandidateAdded', (data) => {
      console.log(data.data.date);

      playAudio();
      NewCandidateNotification();

      // notificationBAr();

    });




  });

  // ..................................................................................................................................................








  // ..................................................................................................................................................



  const playAudio = () => {
    const audio = new Audio(Tone); // Use the imported audio file path

    audio.play();
  };
  const NewCandidateNotification = () => {
    const notify = document.getElementById('CandidateAdded')
    notify.classList.add('green-text');
    //  notify.style.color = 'green'
    // Add click event listener to change color back to white
    notify.addEventListener('click', () => {
      notify.classList.remove('green-text');
    });
  };




  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "45px",
            zIndex: 1000,

          }}
          className={`sidebar open`}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Logo
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* ------------Search Bar--------- */}
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  // activeClassName="active"
                  activeclassname="active"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        {/* <main className="all open">{children}</main> */}
        <main className={`all ${isOpen ? 'open' : ''}`}>
          {children}
        </main>
      </div >
    </>
  );
};

export default HRSidebar;
