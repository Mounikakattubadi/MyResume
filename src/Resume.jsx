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
                                Software Engineer · Full Stack (MERN)
                            </p>
                        </header>

                        {/* SUMMARY */}
                        <section className="resume-section">
                            <h2 className="section-title">Summary</h2>
                            <p className="section-text">
                                Full Stack Software Engineer with hands-on experience building and deploying production-grade web applications for B2B and manufacturing domains. Completed 7+
                                industrial projects. Strong backend experience in designing REST APIs, authentication systems, invoice generation, email automation, and admin workflows. Comfortable owning features end-to-end from frontend to backend and deployment.
                            </p>

                        </section>

                        {/* WORK EXPERIENCE */}
                        <section className="resume-section">
                            <h2 className="section-title">Work Experience</h2>

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
                                        Developed and maintained production websites and internal
                                        dashboards for recycling and manufacturing businesses.
                                    </li>
                                    <li>
                                        Implemented server-side business logic for enquiry handling,
                                        admin-managed content, and secure data processing.
                                    </li>
                                    <li>
                                        Designed responsive and reusable React components based on
                                        Figma designs to ensure consistent UI across pages.
                                    </li>
                                    <li>
                                        Integrated frontend with backend services, handling form
                                        validations, error states, and structured data flow.
                                    </li>
                                    <li>
                                        Deployed applications on Hostinger, managing builds,
                                        domains, environment configurations, and DNS settings.
                                    </li>
                                    <li>
                                        Collaborated directly with founders to convert business
                                        requirements into scalable technical solutions.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* PROJECTS */}
                        <section className="resume-section">
                            <h2 className="section-title">Key Projects</h2>

                            {/* RubberScrapMart */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">RubberScrapMart</h3>
                                    <span className="item-meta">
                                        B2B Marketplace · MERN Stack
                                    </span>
                                </div>

                                <ul className="bullet-list">
                                    <li>
                                        Designed and developed a full-fledged B2B marketplace for
                                        buying and selling rubber scrap.
                                    </li>
                                    <li>
                                        Implemented secure authentication flows including user
                                        login, signup, admin login, and forgot password.
                                    </li>
                                    <li>
                                        Built RESTful backend APIs using Node.js and Express.js to
                                        manage users, products, enquiries, and orders.
                                    </li>
                                    <li>
                                        Designed MongoDB schemas and optimized queries for invoices,
                                        orders, and user data.
                                    </li>
                                    <li>
                                        Implemented invoice generation and automated email
                                        notifications.
                                    </li>
                                    <li>
                                        Developed admin dashboards for managing listings,
                                        enquiries, and user activity.
                                    </li>
                                    <li>
                                        Handled complete deployment and production configuration.
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

                            {/* Vikah Ecotech Platform */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Vikah Ecotech Platform</h3>
                                    <span className="item-meta">
                                        Recycling Machinery Platform · React-based Web Application
                                    </span>
                                </div>

                                <ul className="bullet-list compact-list">
                                    <li>
                                        Developed enquiry management and content-driven pages for
                                        recycling machinery and industrial services.
                                    </li>
                                    <li>
                                        Integrated frontend with server-side systems for data
                                        handling and request processing.
                                    </li>
                                    <li>
                                        Converted business workflows into scalable and
                                        maintainable UI components.
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

                            {/* Manufacturing Platform */}
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
                                        Designed product taxonomy and navigation structure for
                                        industrial buyers.
                                    </li>
                                    <li>
                                        Improved maintainability by separating UI, business logic,
                                        and backend integration layers.
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
                                <p className="skill-label">Programming</p>
                                <p className="skill-inline-text">
                                    Java, JavaScript (ES6+), TypeScript, Python
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Frontend (Web)</p>
                                <p className="skill-inline-text">
                                    React.js, Vue.js, Vite, HTML5, CSS, TailwindCSS, Bootstrap
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Mobile Development</p>
                                <p className="skill-inline-text">
                                    React Native
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Backend</p>
                                <p className="skill-inline-text">
                                    Node.js, Express.js, REST APIs
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Databases</p>
                                <p className="skill-inline-text">
                                    MongoDB, Mongoose, SQL
                                </p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Tools & Deployment</p>
                                <p className="skill-inline-text">
                                    Git, GitHub, CI/CD Pipelines, Hostinger, Netlify
                                </p>
                            </div>
                        </section>


                        {/* HIGHLIGHTS */}
                        <section className="side-section">
                            <h2 className="side-title">Highlights</h2>
                            <ul className="side-bullets">
                                <li>Developed secure auth systems with admin & user roles.</li>
                                <li>Implemented invoice generation and email automation.</li>
                                <li>Owned features end-to-end from backend to deployment.</li>
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
                    </aside>
                </main>
            </div>
        </div>
    );
}

export default Resume;
