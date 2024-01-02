import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Home.module.css'; 


function Home() {
  
    return (
      <div  className={` p-5 ${styles.abcd}`}>
        <div className={`container p-5 ${styles.container}`}>
        <div className={`jumbotron ${styles.jumbotron}`}>
          <h1 className={`display-4 m-4 text-dark ${styles.jumbotronTitle}`}>Welcome to  Mindful Gurukul!</h1>
          <h4 className={`lead text-success m-4  ${styles.jumbotronLead}`}>How to study and crack exams confidently? </h4>
          <hr className={`my-5 ${styles.jumbotronDivider}`} />
          <p className={`lead  m-4 ${styles.jumbotronText}`}>We create a Stress-free, Smart learning using algorithms by Leveling Up Learning Habits.</p>
            <Link to="/login" className={`lead mt-5 ${styles.jumbotronButton}`}>
            <a className="btn mt-4 btn-primary btn-sm w-50" href="/login" role="button">Get Started</a>
                            </Link>
        </div>
      </div>
      </div>
    )
}

export default Home
