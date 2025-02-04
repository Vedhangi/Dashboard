import React from "react";
import "../Styles/Dashboard.css";
import { FaEnvelope, FaUser, FaDollarSign, FaBell , FaQuestionCircle } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { BiHome , BiSearch , BiFileBlank, BiGroup , BiClipboard, BiTask , BiFile , BiStats} from 'react-icons/bi';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
      <div className='menu--list'>
            <a href="#" className='item1 '>
                <BiHome className='icon' />
                Dashboard
            </a>
            <a href="#" className='item'>
                <BiTask className='icon'/>
                Catalog
            </a>
            <a href="#" className='item'>
                <BiGroup className='icon'/>
                Group Training
            </a>
            <a href="#" className='item'>
                <BiClipboard className='icon'/>
                Requirenment
            </a>
            <a href="#" className='item'>
                <BiStats className='icon'/>
                In Progress
            </a>
            <a href="#" className='item'>
                <BiFile className='icon'/>
                Docunment
            </a>
            <a href="#" className='item'>
                <BiFileBlank className='icon'/>
                Transcript
            </a>
        </div>
      
      </div>
 {/* serach , admin */}
 


      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header1">
          <div className="btn-header">
          <button className="btn" >Super Admin</button>
          <button className="btn">Admin</button>
          <button className="btn" >Student</button>
          </div>

          <div className="user-info">
            <div className='search-box'>
                <input type="text" placeholder='Search anything here..' />
                <BiSearch className='icon'/>         
            </div>
            <FaBell className="icons" />
            <FaEnvelope className="icons" />
            <FaQuestionCircle className="icons" />
            <FaUser className="icons" />
            </div>
          </div>

        <div className="header">
          <h2>Welcome back, John!</h2>
          <div className="user-info">
            <FaUser className="icon" />
            <span>John Doe</span>
          </div>
        </div>

        {/* Finance Section */}
        <div className="finance-section">
          <div className="finance-card">
            <FaDollarSign className="icon" />
            <h3>$10,000</h3>
            <p>Total Payable</p>
          </div>
          <div className="finance-card">
            <FaDollarSign className="icon" />
            <h3>$5,000</h3>
            <p>Total Paid</p>
          </div>
          <div className="finance-card">
            <FaDollarSign className="icon" />
            <h3>$1,300</h3>
            <p>Others</p>
          </div>
          <div className="finance-card">
            <FaDollarSign className="icon" />
            <h3>$1,300</h3>
            <p>Others</p>
          </div>
        </div>


        <div className="threecards">
          <div className="three-card">
            <FaDollarSign className="icon" />
            <h3>$10,000</h3>
            <p>Total Payable</p>
          </div>
          <div className="three-card">
            <FaDollarSign className="icon" />
            <h3>$5,000</h3>
            <p>Total Paid</p>
          </div>
          <div className="three-card">
            <FaDollarSign className="icon" />
            <h3>$1,300</h3>
            <p>Others</p>
          </div>
          
        </div>
        {/* Enabled Courses */}
        <div className="courses-section">
          <h3>Enabled Courses</h3>
          <div className="course-card">
            <div>
              <h4>Object Oriented Programming</h4>
            </div>
            <button className="view-button">View</button>
          </div>
          <div className="course-card">
            <div>
              <h4>Fundamentals of DBMS</h4>
            </div>
            <button className="view-button">View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
