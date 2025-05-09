import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import dpImage from './dp.jpg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={dpImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/tanuku-saikarthik/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sai-karthik-tanuku-3b4547297/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tanuku Sai Karthik</h1>
          <p>Full Stack Engineer, ML Enthusiast</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/tanuku-saikarthik/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/sai-karthik-tanuku-3b4547297/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;