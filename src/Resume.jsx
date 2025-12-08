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
        contentRef: resumeRef, // react-to-print v3 API
    });

    return (
        <div className="app-root">
            {/* Top bar with download button */}
            <div className="top-bar">
                <button className="download-btn" onClick={handlePrint}>
                    Download PDF
                </button>
            </div>

            {/* Centered resume */}
            <div className="resume-page">
                <main className="resume-shell" ref={resumeRef}>
                    {/* LEFT MAIN COLUMN */}
                    <section className="main-column">
                        {/* NAME + ROLE */}
                        <header className="name-block">
                            <h1 className="resume-name">Mounika Kattubadi</h1>
                            <p className="resume-role">
                                Software Engineer · Full Stack Developer (MERN)
                            </p>
                        </header>

                        {/* SUMMARY */}
                        <section className="resume-section">
                            <h2 className="section-title">Summary</h2>
                            <p className="section-text">
                                Full-stack MERN developer with hands-on experience building and
                                deploying production web applications for recycling,
                                manufacturing, and B2B marketplace domains. Comfortable taking
                                Figma designs to pixel-perfect React, building APIs with
                                Node.js/Express, and working with MongoDB for schema design and
                                performance. Focused on clean code, usable interfaces, and
                                delivering business value quickly.
                            </p>
                        </section>

                        {/* WORK EXPERIENCE */}
                        <section className="resume-section">
                            <h2 className="section-title">Work Experience</h2>

                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">
                                        Full Stack Web Developer · Vikah Ecotech
                                    </h3>
                                    <span className="item-meta">
                                        Sep 2024 – Present · Nagole, Hyderabad
                                    </span>
                                </div>
                                <ul className="bullet-list">
                                    <li>
                                        Develop and maintain production websites and dashboards
                                        using the MERN stack for recycling and rubber industries.
                                    </li>
                                    <li>
                                        Translate Figma UI/UX into reusable, responsive React
                                        components aligned with brand and requirements.
                                    </li>
                                    <li>
                                        Implement and integrate RESTful APIs in Node.js and
                                        Express.js, focusing on secure, efficient data flow.
                                    </li>
                                    <li>
                                        Work with MongoDB for schema design, query optimization, and
                                        application-side data handling.
                                    </li>
                                    <li>
                                        Deploy and manage applications on Hostinger, including
                                        environment setup, domains, and DNS configuration.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* INDUSTRIAL PROJECTS */}
                        <section className="resume-section">
                            <h2 className="section-title">Industrial Projects</h2>

                            {/* 1. Vikah Ecotech */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Vikah Ecotech</h3>
                                    <span className="item-meta">
                                        Recycling Machinery Platform · MERN
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Corporate website with product sections, enquiry flows, and
                                        trade-fair pages for recycling machinery.
                                    </li>
                                    <li>
                                        Built responsive UI with reusable React components to speed
                                        up future page development.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://www.vikahecotech.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            vikahecotech.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 2. RubberScrapMart */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">RubberScrapMart</h3>
                                    <span className="item-meta">B2B Marketplace · MERN</span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        B2B marketplace for buying and selling rubber scrap with
                                        product listings and enquiry flows.
                                    </li>
                                    <li>
                                        Designed SEO-friendly architecture and optimized rendering
                                        to improve performance and discoverability.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://rubberscrapmart.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            rubberscrapmart.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 3. Vikah Rubbers */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Vikah Rubbers</h3>
                                    <span className="item-meta">
                                        Manufacturing Website · React
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Product and capability showcase site for a rubber
                                        manufacturing company.
                                    </li>
                                    <li>
                                        Worked with stakeholders to structure product taxonomy for
                                        clearer navigation and better lead capture.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://vikahrubbers.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            vikahrubbers.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 4. Lava Rubber LLC */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Lava Rubber LLC</h3>
                                    <span className="item-meta">
                                        Rubber Products & Services · Web
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Modern website to present rubber products, services, and
                                        sustainability-focused content.
                                    </li>
                                    <li>
                                        Implemented SEO-driven page structure to improve search
                                        visibility across global markets.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://lavarubberllc.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            lavarubberllc.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 5. VSSI */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">VSSI</h3>
                                    <span className="item-meta">
                                        Industrial Services Website · Web
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Informational site with services overview, company details,
                                        and contact flows for industrial clients.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://vssi.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            vssi.in
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 6. LG Industry */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">LG Industry</h3>
                                    <span className="item-meta">
                                        Rubber Crumb & Granules · Web
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Product site for rubber crumb and granules, targeting
                                        industrial buyers.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://lgindustry.in/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            lgindustry.in
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* 7. Saraswathi Rubbers */}
                            <div className="item">
                                <div className="item-header">
                                    <h3 className="item-title">Saraswathi Rubbers</h3>
                                    <span className="item-meta">
                                        Industrial Rubber Manufacturer · Web
                                    </span>
                                </div>
                                <ul className="bullet-list compact-list">
                                    <li>
                                        Company website highlighting industrial rubber products and
                                        manufacturing capabilities.
                                    </li>
                                    <li>
                                        Live:{" "}
                                        <a
                                            href="https://www.saraswathirubbers.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            saraswathirubbers.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>

                    {/* RIGHT SIDEBAR */}
                    <aside className="side-column">
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

                        <section className="side-section">
                            <h2 className="side-title">Skills</h2>

                            <div className="skill-group">
                                <p className="skill-label">Programming</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">HTML</span>
                                    <span className="skill-tag">CSS</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">Python</span>
                                </div>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Frameworks</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">React.js</span>
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">Express.js</span>
                                    <span className="skill-tag">Bootstrap</span>
                                    <span className="skill-tag">jQuery</span>
                                </div>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Design</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">Figma</span>
                                    <span className="skill-tag">Canva</span>
                                    <span className="skill-tag">Adobe XD</span>
                                </div>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Databases</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">MongoDB</span>
                                    <span className="skill-tag">SQL</span>
                                </div>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Data Structures & Algorithms</p>
                                <p className="skill-inline-text">Strong fundamentals</p>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Data & ML Stack</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">NumPy</span>
                                    <span className="skill-tag">Pandas</span>
                                    <span className="skill-tag">Matplotlib</span>
                                    <span className="skill-tag">Seaborn</span>
                                    <span className="skill-tag">Scikit-learn</span>
                                    <span className="skill-tag">TensorFlow</span>
                                    <span className="skill-tag">Keras</span>
                                </div>
                            </div>

                            <div className="skill-group">
                                <p className="skill-label">Tools / Platforms</p>
                                <div className="skill-tags">
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">GitHub</span>
                                    <span className="skill-tag">Hostinger</span>
                                    <span className="skill-tag">SEO Tools</span>
                                </div>
                            </div>
                        </section>

                        {/* HIGHLIGHTS */}
                        <section className="side-section">
                            <h2 className="side-title">Highlights</h2>
                            <ul className="side-bullets">
                                <li>7+ real-world production websites shipped.</li>
                                <li>
                                    End-to-end ownership: requirements → UI/UX → development →
                                    deployment.
                                </li>
                                <li>
                                    Strong collaboration with founders, designers, and backend
                                    teams.
                                </li>
                            </ul>
                        </section>

                        {/* EDUCATION */}
                        <section className="side-section">
                            <h2 className="side-title">Education</h2>

                            {/* B.Tech */}
                            <div className="edu-item">
                                <p className="edu-course" style={{ color: "#000" }}>
                                    B.Tech – Computer Science & Engineering
                                </p>
                                <p className="edu-meta">IIIT, RGUKT – RK Valley</p>
                                <p className="edu-meta">2020 – 2024</p>
                                <p className="edu-meta"><strong>CGPA:</strong> 8.3</p>
                            </div>

                            {/* PUC */}
                            <div className="edu-item">
                                <p className="edu-course" style={{ color: "#000" }}>
                                    Pre-University Course (PUC) – M.P.C
                                </p>
                                <p className="edu-meta">IIIT, RGUKT – RK Valley</p>
                                <p className="edu-meta">2018 – 2020</p>
                                <p className="edu-meta"><strong>CGPA:</strong> 8.66</p>
                            </div>

                            {/* SSC */}
                            <div className="edu-item">
                                <p className="edu-course" style={{ color: "#000" }}>
                                    Secondary School Certificate (SSC)
                                </p>
                                <p className="edu-meta">GVEZPGHS, Dharmavaram</p>
                                <p className="edu-meta">2018</p>
                                <p className="edu-meta"><strong>GPA:</strong> 10</p>
                            </div>
                        </section>


                    </aside>
                </main>
            </div>
        </div>
    );
}

export default Resume;
