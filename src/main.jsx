import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Check, Mail, MapPin, Menu, X } from 'lucide-react';
import './styles.css';

const experiences = [
  {
    period: 'Jul 2026 — Present',
    role: 'Human Resources Specialist I',
    company: 'City and County of Honolulu · Department of Human Resources',
    logo: '/logos/honolulu-seal.png',
    logoAlt: 'City and County of Honolulu seal',
    details: []
  },
  {
    period: 'Jan 2025 — Jun 2026',
    role: 'Admissions Operations Assistant',
    company: 'University of Hawaiʻi at Mānoa · Undergraduate Admissions',
    logo: '/logos/uh-manoa.png',
    logoAlt: 'University of Hawaiʻi at Mānoa logo',
    details: [
      'Processed confidential student records, transcripts, and admissions documents with accuracy.',
      'Supported office operations through data entry, scanning, and administrative coordination.'
    ]
  },
  {
    period: 'Jan 2026 — May 2026',
    role: 'Poʻokela Internship Program Intern',
    company: 'Honolulu Liquor Commission',
    logo: '/logos/honolulu-seal.png',
    logoAlt: 'City and County of Honolulu seal',
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
    logo: '/logos/uh-manoa.png',
    logoAlt: 'University of Hawaiʻi at Mānoa logo',
    details: [
      'Assisted with office operations, communication management, and student support services.',
      'Supported faculty, students, and public inquiries while coordinating school activities.'
    ]
  },
  {
    period: 'Aug 2022 — Aug 2024',
    role: 'Welcome Center Assistant',
    company: 'University of Hawaiʻi at Mānoa',
    logo: '/logos/uh-manoa.png',
    logoAlt: 'University of Hawaiʻi at Mānoa logo',
    details: [
      'Assisted prospective and current students through in-person, email, and phone communication.',
      'Represented the university at outreach and recruitment events.'
    ]
  },
  {
    period: 'May 2023 — Dec 2023',
    role: 'Executive Vice President',
    company: 'SHRM · Aloha Chapter',
    logo: '/logos/shrm.png',
    logoAlt: 'Society for Human Resource Management logo',
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

const studyPrograms = [
  {
    id: 'yonsei',
    tab: 'Yonsei University',
    institution: 'Yonsei University',
    location: 'South Korea',
    image: '/yonsei.jpeg',
    alt: 'Me during my study-abroad experience at Yonsei University in South Korea',
    copy: 'At Yonsei University, I had the opportunity to live and learn in South Korea. The experience became an important part of my international education and broadened the way I see people, culture, and community.'
  },
  {
    id: 'roehampton',
    tab: 'University of Roehampton',
    institution: 'University of Roehampton',
    location: 'London, United Kingdom',
    image: '/london.jpeg',
    alt: 'Me during my study-abroad experience at the University of Roehampton in London',
    copy: 'My time at the University of Roehampton gave me the opportunity to study and experience life in London. It added another valuable international perspective to my education.'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStudyId, setActiveStudyId] = useState('yonsei');
  const activeStudy = studyPrograms.find((program) => program.id === activeStudyId);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    if (window.location.hash) {
      requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
    }
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
                <div className="experience-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <div className="logo-badge">
                    <img src={item.logo} alt={item.logoAlt} />
                  </div>
                </div>
                {item.details.length > 0 && (
                  <ul className="details">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pookela section" id="pookela">
        <div className="section-label"><span>03</span> Featured achievement</div>
        <div className="pookela-case-study">
          <div className="pookela-heading">
            <p className="kicker">Poʻokela Internship Program · 2026</p>
            <h2>Learning in service.<br /><em>Leading with purpose.</em></h2>
            <p className="pookela-intro">At the Honolulu Liquor Commission, I turned my internship experience into practical contributions across employee training, workplace education, and event coordination.</p>
            <div className="achievement-list">
              <span>Training development</span>
              <span>Employee education</span>
              <span>Event planning</span>
              <span>Public service</span>
            </div>
          </div>
          <figure className="presentation-feature">
            <div className="image-frame">
              <img src="/pookela_presentation_picture.jpeg" alt="I am presenting my Honolulu Liquor Commission internship accomplishments at the Poʻokela Graduation Ceremony" />
              <span className="photo-label">Presenting my work</span>
            </div>
            <figcaption>
              <span>01 / The presentation</span>
              <p>I presented the training programs, events, and employee education projects I helped bring to life during my time with the Commission.</p>
            </figcaption>
          </figure>
        </div>
        <div className="recognition-feature">
          <figure>
            <img src="/pookela_group_picture.jpeg" alt="I am pictured with the Mayor and City and County of Honolulu leaders at the Poʻokela Graduation Ceremony" />
            <figcaption>Poʻokela Graduation Ceremony · Honolulu, Hawaiʻi</figcaption>
          </figure>
          <div className="recognition-copy">
            <span className="feature-index">02 / Recognition</span>
            <div className="recognition-mark">✦</div>
            <h3>A meaningful close to a memorable chapter.</h3>
            <p>At the Poʻokela Graduation Ceremony, I was recognized by the Mayor for my contributions to the City and County of Honolulu. It was an honor to celebrate alongside the leaders and mentors who supported my growth throughout the program.</p>
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

      <section className="global-study section">
        <div className="section-label light"><span>05</span> Global learning</div>
        <div className="global-study-layout">
          <figure className="study-photo" key={activeStudy.id}>
            <img src={activeStudy.image} alt={activeStudy.alt} />
            <figcaption>{activeStudy.institution} · {activeStudy.location}</figcaption>
          </figure>
          <div className="global-study-copy">
            <p className="kicker">Study abroad</p>
            <h2>A wider world.<br /><em>A broader perspective.</em></h2>
            <div className="study-switcher" role="tablist" aria-label="Choose a study abroad experience">
              {studyPrograms.map((program) => (
                <button
                  key={program.id}
                  type="button"
                  role="tab"
                  aria-selected={activeStudyId === program.id}
                  className={activeStudyId === program.id ? 'active' : ''}
                  onClick={() => setActiveStudyId(program.id)}
                >
                  <span>{activeStudyId === program.id ? '●' : '○'}</span>
                  {program.tab}
                </button>
              ))}
            </div>
            <p className="study-copy" key={`${activeStudy.id}-copy`}>{activeStudy.copy}</p>
            <div className="global-detail">
              <span>Institution</span>
              <strong>{activeStudy.institution}</strong>
            </div>
            <div className="global-detail">
              <span>Location</span>
              <strong>{activeStudy.location}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="education section">
        <figure className="grad-card">
          <img src="/mia_uh_grad.jpeg" alt="Me celebrating my graduation from the University of Hawaiʻi at Mānoa" />
          <figcaption>
            <span>Class of 2026</span>
            <strong>University of Hawaiʻi at Mānoa</strong>
          </figcaption>
        </figure>
        <div className="education-card">
          <div className="section-label light"><span>06</span> Education</div>
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
          <figure className="copenhagen-photo">
            <img src="/nyhavn.jpeg" alt="Me at Nyhavn during my study-abroad experience in Copenhagen, Denmark" />
            <figcaption>Nyhavn · Copenhagen</figcaption>
          </figure>
          <div className="award-content">
            <p className="kicker">Recognition</p>
            <div className="award-star">✦</div>
            <h3>William R. Johnson Scholarship</h3>
            <p>Awarded by the Shidler College of Business for my study-abroad experience at Copenhagen Business School.</p>
            <span>Fall 2024 · Copenhagen, Denmark</span>
          </div>
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
