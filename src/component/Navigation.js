import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { URL } from '../App';
import "bootstrap/js/src/collapse.js";
import styles from './Home.module.css'; // Import the CSS module

const Navigation = () => {
    const [active, setActive] = useState(null);

 
    const logOut = () => {
        // Clear the localStorage and set isLoggedIn to false
        localStorage.removeItem('isLoggedIn');
        
      };
    

    const handleButtonClick = (buttonName) => {
        setActive(buttonName);
    };
    const Remove=()=>
    {
        setActive(null)
    }
 // Check if the user is logged in
 const isLoggedIn = localStorage.getItem('isLoggedIn');


 return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
       <Link to="/home" className="navbar-brand" onClick={Remove}>
       Mindful Gurukul 
       </Link>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarNav"
         aria-controls="navbarNav"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto">
           {isLoggedIn ? (
             <>
               <li className="nav-item">
                 <Link
                   to="/addItem"
                   className={`nav-link  ${active === 'addItem' ? styles['active-button'] : ''}`}
                 >
                   <a
                     className={`btn btn-outline-info`}
                     role="button"
                     onClick={() => { handleButtonClick('addItem'); }}
                   >
                     Add user
                   </a>
                 </Link>
               </li>
               <li className="nav-item">
                 <Link
                   to="users"
                   className={`nav-link   ${active === 'users' ? styles['active-button'] : ''}`}
                 >
                   <a
                     className={`btn btn-outline-info`}
                     role="button"
                     onClick={() => { handleButtonClick('users'); }}
                   >
                     Users
                   </a>
                 </Link>
               </li>
               <li className="nav-item">
                 <Link
                   to="/home"
                   className={`nav-link  ${active === '' ? styles['active-button'] : ''}`}
                 >
                   <a
                     className={`btn btn-outline-info`}
                     role="button"
                     onClick={() => { handleButtonClick('home'); logOut(); }}
                   >
                     Logout
                   </a>
                 </Link>
               </li>
             </>
           ) : (
             <>
               <li className="nav-item">
                 <Link to="/login" className={`nav-link  ${active === 'login' ? styles['active-button'] : ''}`}>
                   <a
                     className={`btn btn-outline-info`}
                     role="button"
                     onClick={() => handleButtonClick('login')}
                   >
                     Login
                   </a>
                 </Link>
               </li>
               <li className="nav-item ">
                 <Link to="/signup" className={`nav-link   ${active === 'signup' ? styles['active-button'] : ''}`}>
                   <a
                     className={`btn btn-outline-info`}
                     role="button"
                     onClick={() => handleButtonClick('signup')}
                   >
                     Sign Up
                   </a>
                 </Link>
               </li>
             </>
           )}
         </ul>
       </div>
     </div>
   </nav>
 );
};

export default Navigation;