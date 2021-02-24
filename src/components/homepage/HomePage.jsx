import React from 'react';
import './homePage.css';
import leafImage from '../../images/scott-webb-KpuWtiszFQw-unsplash.png';
import developerImage from '../../images/Group 156.png';
import company1 from '../../images/acm-logo.png';
import company2 from '../../images/index.png';
import photo from '../../images/photo.png';
import { FaFacebookF, FaPen, FaLinkedin, FaTwitter, FaPaintBrush } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { GiCommercialAirplane, GiCricketBat } from "react-icons/gi";
import { MdLibraryMusic } from  "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { IoMdCloudDownload } from "react-icons/io"
// Pacifico
// Segoe UI
// Microsoft YaHei

export default function HomePage() {
    return (
        <div className="container-home">
            <div className="top-section-home">
                <div className="navbar-home">
                    <h1 className="name">Abhishek Singh</h1>
                    <div className="navbar-right">
                        <a href="#"className="navbar-links-home">ABOUT</a>
                        <a href="#"className="navbar-links-home">EDUCATION</a>
                        <a href="#"className="navbar-links-home">WORK</a>
                        <a href="#"className="navbar-links-home">CONTACT</a>
                    </div>
                </div>
                <div className="mid-section-home">
                    <img src={developerImage} className="developer-image" />
                    <img src={leafImage} className="leaf-image" />
                    <div className="intro">
                        <h1>Hey Friend!</h1>
                        Results-driven freelance software developer, seeking to use proven ML, UI and Front-end skills to deliver coding excellence to various companies.
                        <div className="intro-profile-links">
                            <a href="#" className="profile-link"><FaFacebookF /></a>
                            <a href="#" className="profile-link"><GrInstagram /></a>
                            <a href="#" className="profile-link"><FaTwitter /></a>
                            <a href="#" className="profile-link"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <h2 className="thoughts">My process focuses on release cycles and validation. Think, build, launch, measure. Repeat.</h2>
                <img src={company1} className="company-logos" />
                <img src={company2} className="company-logos" />
            </div>
            <div className="bottom-section-home">
                <div className="empty"></div>
                <img src={photo}  className="photo" />
                <button className="resume-download">
                    <IoMdCloudDownload className="download-icon" /> 
                    Download Resume
                </button>
                <div className="about-home">
                    <h1 className="about-head">ABOUT ME</h1>
                    <div className="about-desc">
                        Hello! This is Abhhishek Singh a final year B.Tech student from IIITDM Kurnool. I have experience in Front-End development and UI/UX for dynamic web projects. Having indepth knowledge in Data Science including Machine Learning, Deep Learning, Tensorflow, Keras, etc. Strong background in Management and Leadership.
                    </div>
                    <div className="basic-info">
                        <strong>Name: </strong> Abhishek Singh<br/>
                        <strong>Nationality: </strong> Indian<br/>
                        <strong>Address: </strong> New GT Road, Gandhi Nagar, DOS<br/>
                        <strong>Mobile No.: </strong> (+91) 7366003350<br/>
                        <strong>Email: </strong> abhishek.aashu99@gmail.com
                    </div>
                </div>
            </div>
            <div className="interest-home">
                <h1 className="about-head">MY INTERESTS</h1>
                <FaPen className="interest-icons" />
                <GiCommercialAirplane className="interest-icons" />
                <MdLibraryMusic className="interest-icons" />
                <GiCricketBat className="interest-icons" />
                <BiCodeBlock className="interest-icons"/>
                <FaPaintBrush className="interest-icons" />
            </div>
        </div>
    )
}