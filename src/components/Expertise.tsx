import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind CSS",
    "Material-UI",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",
    "Docker",
    "GraphQL",
    "REST APIs",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Hugging Face",
    "Medical Image Analysis",
    "Natural Language Processing",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
<p>
  I have hands-on experience building full-fledged web applications from the ground up using the MERN stack (MongoDB, Express.js, React, Node.js), Nextjs and Nestjs. I'm proficient in both frontend and backend development, focusing on building responsive user interfaces with Tailwind CSS and Material-UI, and creating scalable backend systems with REST APIs, authentication, and database integration. I follow the full Software Development Life Cycle (SDLC), from planning and development to deployment and maintenance, and have worked with tools like AWS, Git, and Docker for efficient development and deployment.
</p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

              { /* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>*/}

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have project experience building LLM solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;