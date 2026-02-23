import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
    FiMapPin,
    FiMail,
    FiPhone,
    FiGlobe,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";
import "./Resume.css";

function Resume() {
    const resumeRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef: resumeRef,
    });

    return (
        <div className="app-root">
            <div className="top-bar">
                <button className="download-btn" onClick={handlePrint}>
                    Download PDF
                </button>
            </div>

            <div className="resume-page">
                <main className="resume-shell" ref={resumeRef}>

                    {/* LEFT COLUMN */}
                    <section className="main-column">

                        {/* HEADER */}
                        <header className="name-block">
                            <h1 className="resume-name">Mounika Kattubadi</h1>
                            <p className="resume-role">
                                Full Stack Developer | MERN Stack Developer
                            </p>
                        </header>

                        {/* PROFESSIONAL SUMMARY */}
                        <section className="resume-section">
                            <h2 className="section-title">Professional Summary</h2>
                            <p className="section-text">
                                Full Stack Developer with 1+ year of hands-on experience building and maintaining production-level MERN stack applications. Experienced in designing REST APIs, optimizing MongoDB queries, implementing secure JWT-based authentication, and managing end-to-end deployments. Improved API performance by 30–40% through indexing and query optimization while ensuring stable, business-critical web platforms.
                            </p>
                        </section>

                        {/* CORE COMPETENCIES */}
                        <section className="resume-section">
                            <h2 className="section-title">Core Competencies</h2>
                            <ul className="bullet-list compact-list">
                                <li>Full Stack Development (MERN Stack)</li>
                                <li>RESTful API Design & Implementation</li>
                                <li>Authentication & Authorization (JWT, RBAC)</li>
                                <li>MongoDB Schema Design & Query Optimization</li>
                                <li>Error Handling & Middleware Architecture</li>
                                <li>Role-Based Access Control Implementation</li>
                                <li>Performance Optimization & Debugging</li>
                                <li>Production Deployment & Environment Configuration</li>
                            </ul>
                        </section>

                        {/* WORK EXPERIENCE */}
                        <section className="resume-section">
                            <h2 className="section-title">Work Experience</h2>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">
                                        Full Stack Developer | Vikah Ecotech Pvt Ltd
                                    </h3>
                                    <span className="item-meta">
                                        Sep 2024 – Present | Hyderabad
                                    </span>
                                </div>

                                <ul className="bullet-list">
                                    <li>
                                        Developed and maintained MERN-based web applications supporting internal business workflows and client operations.
                                    </li>
                                    <li>
                                        Designed and implemented 30+ RESTful APIs with structured validation, centralized error handling, and secure JWT-based authentication.
                                    </li>
                                    <li>
                                        Optimized MongoDB queries using indexing and schema restructuring, improving average API response time by approximately 30–40%.
                                    </li>
                                    <li>
                                        Implemented role-based access control (RBAC) across multiple user roles to ensure secure and restricted system access.
                                    </li>
                                    <li>
                                        Managed production deployments including environment-based configuration, SSL integration, and build optimization.
                                    </li>
                                    <li>
                                        Diagnosed and resolved backend performance bottlenecks and asynchronous handling issues, improving overall system stability.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* PROJECTS */}
                        <section className="resume-section">
                            <h2 className="section-title">Projects</h2>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">RubberScrapMart – B2B Marketplace</h3>
                                    <span className="item-meta">MERN Stack Application</span>
                                </div>

                                <ul className="bullet-list">
                                    <li>
                                        Built a full-stack B2B marketplace platform to manage listings, enquiries, approvals, and financial transactions.
                                    </li>
                                    <li>
                                        Developed 30+ secure REST APIs with pagination, filtering, and structured response handling for dynamic frontend rendering.
                                    </li>
                                    <li>
                                        Designed and implemented an admin dashboard for managing users, listings, and transaction records.
                                    </li>
                                    <li>
                                        Integrated invoice generation and automated email notifications to streamline transaction workflows.
                                    </li>
                                </ul>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Vikah Ecotech Platform</h3>
                                    <span className="item-meta">React.js Web Application</span>
                                </div>

                                <ul className="bullet-list compact-list">
                                    <li>
                                        Developed reusable and responsive UI components to ensure consistent cross-device experience.
                                    </li>
                                    <li>
                                        Integrated frontend with backend APIs and implemented client-side validation to improve data accuracy.
                                    </li>
                                </ul>
                            </div>

                        </section>
                    </section>

                    {/* RIGHT SIDEBAR */}
                    <aside className="side-column">

                        {/* CONTACT */}
                        <section className="side-section">
                            <h2 className="side-title">Contact</h2>
                            <ul className="contact-list">
                                <li><FiMapPin /> Hyderabad, India</li>
                                <li><FiPhone /> +91 95735 30350</li>
                                <li><FiMail /> mounikakattubadi1@gmail.com</li>
                                <li><FiLinkedin /> LinkedIn</li>
                                <li><FiGithub /> GitHub</li>
                                <li><FiGlobe /> Portfolio</li>
                            </ul>
                        </section>

                        {/* TECHNICAL SKILLS */}
                        <section className="side-section">
                            <h2 className="side-title">Technical Skills</h2>

                            <p><strong>Frontend:</strong> React.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                            <p><strong>Backend:</strong> Node.js, Express.js, REST APIs, Middleware, MVC Architecture</p>
                            <p><strong>Security:</strong> JWT, Role-Based Access Control, bcrypt, Input Validation</p>
                            <p><strong>Database:</strong> MongoDB, Mongoose, Indexing</p>
                            <p><strong>Tools:</strong> Git, GitHub, CI/CD</p>
                            <p><strong>Deployment:</strong> Environment Configuration, SSL Setup, Production Builds</p>
                        </section>

                        {/* ENGINEERING PRACTICES */}
                        <section className="side-section">
                            <h2 className="side-title">Engineering Practices</h2>
                            <p>
                                REST API standards, Modular architecture, Centralized error handling,
                                Git-based workflows, Environment-based configuration,
                                Debugging & Performance Monitoring
                            </p>
                        </section>

                        {/* EDUCATION */}
                        <section className="side-section">
                            <h2 className="side-title">Education</h2>

                            <div className="edu-item">
                                <p className="edu-course">
                                    B.Tech – Computer Science & Engineering
                                </p>
                                <p className="edu-meta">
                                    IIIT RGUKT – RK Valley
                                </p>
                                <p className="edu-meta">
                                    2020 – 2024 | CGPA: 8.3
                                </p>
                            </div>

                            <div className="edu-item">
                                <p className="edu-course">
                                    Pre-University Course (MPC)
                                </p>
                                <p className="edu-meta">
                                    IIIT RGUKT – RK Valley
                                </p>
                                <p className="edu-meta">
                                    2018 – 2020 | CGPA: 8.66
                                </p>
                            </div>
                        </section>

                    </aside>

                </main>
            </div>
        </div>
    );
}

export default Resume;