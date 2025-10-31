export const metadata = { title: "Tharini — Resume" };

export default function ResumePage() {
  return (
    <div>
            <main>
            <h1 className="resume-title">Resume</h1>

            <div className="entry">
                <h3 className="entry-title"></h3>
                <p className="entry-info"></p>
            </div>
            <a
                className="button"
                href="ThariniSenthil_Resume.docx"
                download="Tharini_Senthil_Resume.docx"
                >Download Resume</a
            >
            <div className="resume"></div>

            <section className="section">
                <h2 className="section-title">Tharini Senthil</h2>
                <p className="entry-info">
                <a href="mailto:tmsenthi@calpoly.edu">tmsenthi@calpoly.edu</a> ·
                (425)393-4916
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Profile Summary</h2>
                <p className="entry-description">
                First-year Computer Science student with a strong academic foundation
                and growing experience in Java, Python, and web development.
                Passionate about using technology and collaboration to solve
                real-world problems and support community initiatives.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                <h3 className="entry-title">Cal Poly, San Luis Obispo</h3>
                <p className="entry-info">B.S. Computer Science Sept 2025 - Present</p>
                <p className="entry-description">
                    Relevant Coursework: Data Structures; Calculus 3
                </p>
                </div>
                <div className="entry">
                <h3 className="entry-title">Newport Senior High School</h3>
                <p className="entry-info">
                    Sept 2021 - June 2025 Unweighted GPA: 3.962/4.00 Weighted GPA:
                    4.43/4.00
                </p>
                <p className="entry-description">
                    Relevant Coursework: AP Micro/Macroeconomics; AP Calculus BC; AP
                    Calculus AB; AP Physics 1; AP Computer Science A; Data Structures.
                </p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Honors and Awards</h2>
                <ul className="bullet-list">
                <li>Presidential Service Award - Silver (2021 -Present)</li>
                <li>“Kode with Klossy” Web Development Scholar</li>
                <li>Girls Who Code Web Development Scholar</li>
                <li>Speech and Debate - POI 1st Place (WA State, 2023)</li>
                <li>POI 3rd Place (WA State,2024)</li>
                <li>POI 4th Place (WA State, 2024)</li>
                <li>2x POI National Qualifier ('23, '24)</li>
                <li>National Honor Society (Sept 2024 - June 2025)</li>
                <li>AP Scholar with Distinction</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title">Activities</h2>
                <div className="entry">
                <h3 className="entry-title">
                    Soul Connections, 501(c)(3) - Co-Founder and Co-President
                </h3>
                <p className="entry-info">Sept 2016 -2025</p>
                <ul className="bullet-list">
                    <li>
                    Mission: supply resources to local unhoused communities -
                    <a href="https://soulconnectionclub.wordpress.com">website</a>
                    </li>
                    <li>
                    Raised/donated over $25,000 to support organizations including
                    Mary's Place, Seattle Children's, AID, Sophia's Way, KidVantage,
                    and REACH (Evergreen Treatment Services).
                    </li>
                </ul>
                </div>
                <div className="entry">
                <h3 className="entry-title">
                    KidsQuest Children's Museum - Play Guide Instructor
                </h3>
                <p className="entry-info">June - August 2023/2024</p>
                <ul className="bullet-list">
                    <li>
                    Supported STEM learning through play; engaged visitors of all
                    ages; exercised strong communication, judgment, and multitasking
                    in Visitor Experience.
                    </li>
                </ul>
                </div>
                <div className="entry">
                <h3 className="entry-title">Bellevue Youth Theater - Camp Counselor</h3>
                <p className="entry-info">June 2022</p>
                <ul className="bullet-list">
                    <li>
                    Guided elementary students through staging a play and daily
                    activities.
                    </li>
                </ul>
                </div>
                <div className="entry">
                <h3 className="entry-title">School Board Political Campaign - Intern</h3>
                <p className="entry-info">June 2022</p>
                <ul className="bullet-list">
                    <li>
                    Executed email, print, and video campaign assets to support voter
                    outreach for Mrs. Valerie.
                    </li>
                </ul>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Leadership</h2>
                <div className="entry">
                <h3 className="entry-title">Newport Senior High School</h3>
                <p className="entry-info">Sept 2021 - June 2025</p>
                <ul className="bullet-list">
                    <li>
                    Co-President, Asian American Club (2022-2025): Organized cultural
                    events and led discussions.
                    </li>
                    <li>
                    Co-President, Days for Girls Club (2024-2025): Coordinated service
                    projects supporting menstrual health equity.
                    </li>
                    <li>
                    Co-President, Knights Who Code (2024-2025): Taught Java lessons
                    and led collaborative programming projects.
                    </li>
                    <li>
                    Mentor and Member, Speech and Debate (2021-2025): State champion;
                    mentored underclassmen in debate and public speaking.
                    </li>
                    <li>
                    Events Lead, Mission Inspired (501(c)(3)) (2021-2024): Supported
                    education outreach with free classes in libraries and community
                    events.
                    </li>
                </ul>
                </div>
            </section>
            </main>
            <footer className="footer">
            © 2025 Tharini's Personal Website | All Rights Reserved | Made with love
            </footer>
    </div>
  );
}