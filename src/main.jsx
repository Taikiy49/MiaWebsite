import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Check, Mail, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

const experiences = [
  {
    period: 'Jul 2026 — Present',
    role: 'Human Resources Specialist I',
    company: 'City & County of Honolulu',
    details: ['Supporting training and development initiatives that strengthen people, policy, and public service.']
  },
  {
    period: 'Jan 2025 — Jun 2026',
    role: 'Admissions Operations Assistant',
    company: 'University of Hawaiʻi at Mānoa · Undergraduate Admissions',
    details: [
      'Processed confidential student records, transcripts, and admissions documents with accuracy.',
      'Supported office operations through data entry, scanning, and administrative coordination.'
    ]
  },
  {
    period: 'Jan 2026 — May 2026',
    role: 'Poʻokela Internship Program Intern',
    company: 'Honolulu Liquor Commission',
    details: [
      'Created training materials and voice-over presentations related to workplace policies and compliance.',
      'Supported employee education initiatives on workplace safety, harassment prevention, and professional conduct.',
      'Collaborated with the training section to curate employee training videos on time management, customer service, anti-harassment, and conflict resolution.'
    ]
  },
  {
    period: 'Sep 2025 — May 2026',
    role: 'Student Services Clerk',
    company: 'UH Mānoa · School of Travel Industry Management',
    details: [
      'Assisted with office operations, communication management, and student support services.',
      'Supported faculty, students, and public inquiries while coordinating school activities.'
    ]
  },
  {
    period: 'Aug 2022 — Aug 2024',
    role: 'Welcome Center Assistant',
    company: 'University of Hawaiʻi at Mānoa',
    details: [
      'Assisted prospective and current students through in-person, email, and phone communication.',
      'Represented the university at outreach and recruitment events.'
    ]
  },
  {
    period: 'May 2023 — Dec 2023',
    role: 'Executive Vice President',
    company: 'SHRM · Aloha Chapter',
    details: [
      'Coordinated community service initiatives and collaborative student events.',
      'Supported Executive Board leadership and organizational operations.'
    ]
  }
];

const skills = [
  'Training & Development', 'HR Policies', 'Recruitment', 'Employee Education',
  'Customer Service', 'Data Entry', 'Microsoft Office', 'Google Workspace',
  'Student Management Systems', 'Web Design', 'Conversational Japanese'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className={scrolled ? 'nav scrolled' : 'nav'} aria-label="Main navigation">
        <a href="#top" className="monogram" onClick={closeMenu} aria-label="Mia Umeda home">MU<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#pookela" onClick={closeMenu}>Highlights</a>
          <a href="#skills" onClick={closeMenu}>Expertise</a>
          <a className="nav-contact" href="mailto:umedamia@gmail.com" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Human Resources · Honolulu, Hawaiʻi</p>
          <h1>People-first.<br /><em>Purpose-led.</em></h1>
          <p className="hero-intro">A human resources professional creating thoughtful, well-designed experiences that help people learn, grow, and do their best work.</p>
          <div className="hero-actions">
            <a href="#experience" className="button primary">Explore my work <ArrowDown size={17} /></a>
            <a href="mailto:umedamia@gmail.com" className="text-link">Get in touch <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-mark">
          <img src="/mia_pfp.jpeg" alt="Mia Umeda" />
          <div className="portrait-ring" aria-hidden="true" />
          <p>Human resources<br />with heart.</p>
        </div>
        <p className="scroll-note">Scroll to discover <ArrowDown size={14} /></p>
      </header>

      <section className="intro section" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="intro-content">
          <h2>I believe great workplaces begin with <em>genuine care.</em></h2>
          <div className="intro-body">
            <p>Born and based in Honolulu, I bring a calm, people-centered approach to human resources. My experience spans employee training, public service, university operations, recruitment, and student support.</p>
            <p>I’m energized by work that turns complex policies into clear guidance, creates welcoming experiences, and helps organizations invest meaningfully in their people.</p>
            <div className="location"><MapPin size={17} /> Honolulu, Hawaiʻi</div>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading">
          <div className="section-label light"><span>02</span> Experience</div>
          <h2>A career grounded in <em>service & growth.</em></h2>
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-row" key={item.role}>
              <div className="timeline-number">0{index + 1}</div>
              <div className="timeline-date">{item.period}</div>
              <div className="timeline-main">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <ul className="details">
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pookela section" id="pookela">
        <div className="pookela-heading">
          <div className="section-label"><span>03</span> Featured achievement</div>
          <p className="kicker">Poʻokela Internship Program · 2026</p>
          <h2>Learning in service.<br /><em>Leading with purpose.</em></h2>
          <p className="pookela-intro">At the Honolulu Liquor Commission, Mia transformed her internship experience into practical contributions across employee training, workplace education, and event coordination.</p>
        </div>
        <figure className="presentation-feature">
          <img src="/pookela_presentation_picture.jpeg" alt="Mia Umeda presenting her Honolulu Liquor Commission internship accomplishments at the Poʻokela Graduation Ceremony" />
          <figcaption>
            <span>01 / Presenting the work</span>
            <p>Mia shared the training initiatives, event planning, and employee education projects she completed while serving with the Honolulu Liquor Commission.</p>
          </figcaption>
        </figure>
        <div className="recognition-feature">
          <figure>
            <img src="/pookela_group_picture.jpeg" alt="Mia Umeda with the Mayor and City and County of Honolulu leaders at the Poʻokela Graduation Ceremony" />
          </figure>
          <div className="recognition-copy">
            <span className="feature-index">02 / Recognition</span>
            <h3>Poʻokela Graduation Ceremony</h3>
            <p>Recognized by the Mayor for her contributions to the City and County of Honolulu, alongside leaders who supported and celebrated the program’s graduates.</p>
            <div className="achievement-list">
              <span>Training development</span>
              <span>Employee education</span>
              <span>Event planning</span>
              <span>Public service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-label"><span>04</span> Expertise</div>
        <div className="skills-layout">
          <div>
            <p className="kicker">What I bring</p>
            <h2>Practical skills.<br /><em>Human impact.</em></h2>
          </div>
          <div className="skill-list">
            {skills.map((skill) => <div className="skill" key={skill}><Check size={15} />{skill}</div>)}
          </div>
        </div>
      </section>

      <section className="education section">
        <div className="education-card">
          <div className="section-label light"><span>05</span> Education</div>
          <p className="degree-type">Bachelor of Business Administration</p>
          <h2>Human Resource Management,<br />International Business & Management</h2>
          <div className="school-row">
            <div><strong>University of Hawaiʻi at Mānoa</strong><span>Shidler College of Business · 2026</span></div>
            <div className="seal">UH<br /><small>MĀNOA</small></div>
          </div>
          <div className="high-school-row">
            <div><strong>Henry J. Kaiser High School</strong><span>High School Diploma · Honolulu, Hawaiʻi</span></div>
          </div>
        </div>
        <div className="award-card">
          <p className="kicker">Recognition</p>
          <div className="award-star">✦</div>
          <h3>William R. Johnson Scholarship</h3>
          <p>Awarded by the Shidler College of Business for study abroad at Copenhagen Business School.</p>
          <span>Fall 2024 · Copenhagen, Denmark</span>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow"><span /> Let’s work together</p>
        <h2>Good work starts with<br /><em>a conversation.</em></h2>
        <a className="email" href="mailto:umedamia@gmail.com">umedamia@gmail.com <ArrowUpRight /></a>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mia Umeda</p>
          <p>Honolulu, Hawaiʻi</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
