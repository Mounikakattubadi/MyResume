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

function PmResume() {
    const resumeRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef: resumeRef,
    });

    return (
        <div className="app-root">
            {/* Top bar */}
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
                                Aspiring Project Manager | Full Stack Developer
                            </p>
                        </header>

                        {/* SUMMARY */}
                        <section className="resume-section">
                            <h2 className="section-title">Summary</h2>
                            <p className="section-text">
                                Technical professional with 1+ year of full stack development experience and a strong passion for project management. Experienced in coordinating cross-functional teams, delivering end-to-end solutions, and managing project timelines. Skilled at translating technical requirements into actionable project plans and ensuring smooth execution from planning to deployment.
                            </p>
                        </section>

                        {/* WORK EXPERIENCE */}
                        <section className="resume-section">
                            <h2 className="section-title">Professional Experience</h2>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">
                                        Full Stack Developer · Vikah Ecotech
                                    </h3>
                                    <span className="item-meta">
                                        Sep 2024 – Present · Hyderabad
                                    </span>
                                </div>

                                <ul className="bullet-list">
                                    <li>
                                        Led development projects end-to-end, coordinating with founders, designers, and backend teams.
                                    </li>
                                    <li>
                                        Managed feature timelines, prioritized tasks, and ensured successful project deliveries.
                                    </li>
                                    <li>
                                        Translated business requirements into technical specifications and actionable development plans.
                                    </li>
                                    <li>
                                        Developed and maintained web applications while ensuring seamless collaboration across teams.
                                    </li>
                                    <li>
                                        Oversaw deployments and ensured production systems ran smoothly.
                                    </li>
                                    <li>
                                        Facilitated communication between stakeholders, developers, and designers to optimize workflows.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* PROJECTS */}
                        <section className="resume-section">
                            <h2 className="section-title">Key Projects & Leadership</h2>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">RubberScrapMart</h3>
                                    <span className="item-meta">
                                        B2B Marketplace · MERN Stack
                                    </span>
                                </div>

                                <ul className="bullet-list">
                                    <li>
                                        Coordinated project from requirement gathering to deployment, ensuring timely delivery of a full-featured marketplace.
                                    </li>
                                    <li>
                                        Defined project milestones and tracked progress with stakeholders.
                                    </li>
                                    <li>
                                        Managed backend API development, database design, and frontend implementation.
                                    </li>
                                    <li>
                                        Implemented automated invoice generation and email notifications to improve operational efficiency.
                                    </li>
                                    <li>
                                        <a
                                            href="https://rubberscrapmart.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Vikah Ecotech Platform</h3>
                                    <span className="item-meta">
                                        Recycling Machinery Platform · React Web Application
                                    </span>
                                </div>

                                <ul className="bullet-list compact-list">
                                    <li>
                                        Managed the development workflow for enquiry management and content-driven pages.
                                    </li>
                                    <li>
                                        Coordinated frontend-backend integration and ensured data accuracy across modules.
                                    </li>
                                    <li>
                                        Translated business requirements into structured UI and functional components.
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.vikahecotech.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">
                                        Manufacturing Product Platform
                                    </h3>
                                    <span className="item-meta">
                                        Enterprise Web Application
                                    </span>
                                </div>

                                <ul className="bullet-list compact-list">
                                    <li>
                                        Organized project tasks and improved collaboration between developers and stakeholders.
                                    </li>
                                    <li>
                                        Defined product taxonomy and navigation structure to optimize user workflows.
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
                                <li>
                                    <div className="contact-static">
                                        <FiMapPin />
                                        <span>Nagole, Hyderabad</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-static">
                                        <FiPhone />
                                        <span>+91 95735 30350</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-static">
                                        <FiMail />
                                        <span>mounikakattubadi1@gmail.com</span>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        className="contact-link"
                                        href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiLinkedin />
                                        <span>LinkedIn</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="contact-link"
                                        href="https://github.com/Mounikakattubadi"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiGithub />
                                        <span>GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="contact-link"
                                        href="https://mounikakattubadi-portfolio.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FiGlobe />
                                        <span>Portfolio</span>
                                    </a>
                                </li>
                            </ul>
                        </section>

                        {/* SKILLS */}
                        <section className="side-section">
                            <h2 className="side-title">Skills</h2>

                            <div className="skill-group">
                                <p className="skill-label">Project Management</p>
                                <p className="skill-inline-text">
                                    Requirement Gathering, Stakeholder Communication, Task Prioritization, Agile Workflows
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Technical</p>
                                <p className="skill-inline-text">
                                    JavaScript, Node.js, React, MongoDB, Express.js, REST APIs
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Tools & Deployment</p>
                                <p className="skill-inline-text">
                                    Git, GitHub, CI/CD, Hostinger, Netlify, Figma
                                </p>
                            </div>
                        </section>

                        {/* HIGHLIGHTS */}
                        <section className="side-section">
                            <h2 className="side-title">Highlights</h2>
                            <ul className="side-bullets">
                                <li>Led end-to-end project delivery for B2B platforms.</li>
                                <li>Facilitated cross-team communication and coordination.</li>
                                <li>Implemented automated processes to improve operational efficiency.</li>
                            </ul>
                        </section>

                        {/* EDUCATION */}
                        <section className="side-section">
                            <h2 className="side-title">Education</h2>

                            <div className="edu-item">
                                <p className="edu-course">B.Tech – Computer Science & Engineering</p>
                                <p className="edu-meta">IIIT RGUKT – RK Valley</p>
                                <p className="edu-meta">2020 – 2024 | CGPA: 8.3</p>
                            </div>

                            <div className="edu-item">
                                <p className="edu-course">Pre-University Course (PUC) – MPC</p>
                                <p className="edu-meta">IIIT RGUKT – RK Valley</p>
                                <p className="edu-meta">2018 – 2020 | CGPA: 8.66</p>
                            </div>

                            <div className="edu-item">
                                <p className="edu-course">Secondary School Certificate (SSC)</p>
                                <p className="edu-meta">GVEZP GHS, Dharmavaram</p>
                                <p className="edu-meta">2018 | GPA: 10</p>
                            </div>
                        </section>

                        {/* STRENGTHS */}
                        <section className="side-section">
                            <h2 className="side-title">Strengths</h2>
                            <ul className="side-bullets">
                                <li>Strong Communication & Collaboration Skills</li>
                                <li>Quick Learner & Adaptive</li>
                                <li>Leadership Potential & Task Ownership</li>
                            </ul>
                        </section>
                    </aside>
                </main>
            </div>
        </div>
    );
}

export default PmResume;
