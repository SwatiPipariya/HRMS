// XyzSidebar.js
import { NavLink } from "react-router-dom";
import { FaBars, FaHome ,  FaUser } from "react-icons/fa";
// import { FaBars, FaUser } from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
// import { BiAnalyse } from "react-icons/bi";
// import { BiCog } from "react-icons/bi";
// import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
// import { BsCartCheck } from "react-icons/bs";
// import { FaWpforms } from "react-icons/fa"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FaList } from "react-icons/fa6";

const routes = [

    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
      },
  {
    path: "/client/form",
    name: "Add Clients",
    icon: <FaUser />,
    

  },
  {
    path: "/clients/list",
    name: "Client List",
    icon:  <FaList />,
   },


];




const SalesSidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


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
                activeClassName="active"
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

      <main className={`all ${isOpen ? 'open' : ''}`}>
  {children}
</main>

    </div >
    </>
  );
};

export default SalesSidebar;
