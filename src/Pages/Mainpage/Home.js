import { Header } from "../../Components/Header/Header";
import { JobDisplay } from "../Jobs/JobDisplay";
import "./Home.css";
import jobData from "../../data/jobs.json";
import projectData from "../../data/projects.json";
import images from "../../assets/img/images";

const RESUME_URL =
  "https://drive.google.com/file/d/1SdOmIaka-_Q4uavGnum6Gca0xCi_Oemt/view?usp=sharing";

/** Display order aligned with reference portfolio; `featured` matches `.chip.featured` */
const CORE_TECH = [
  { label: "TypeScript", featured: true },
  { label: "React Native", featured: true },
  { label: "Python", featured: true },
  { label: "Java", featured: false },
  { label: "Swift", featured: false },
  { label: "React", featured: false },
  { label: "Flask", featured: false },
  { label: "PyTorch", featured: false },
  { label: "Docker", featured: false },
  { label: "SQL", featured: false },
  { label: "C / C#", featured: false },
  { label: "Unity", featured: false },
];

export function Home() {
  const companyCount = jobData.length;
  const projectCount = projectData.length;

  return (
    <div className="home-page">
      <Header />

      <section className="hero" id="about">
        <div className="hero-left">
          <div>
            <p className="section-kicker">
              Software Developer · IBM · Toronto
            </p>
            <h1 className="hero-headline">
              Curious
              <br />
              by <em>design.</em>
            </h1>
            <p className="hero-bio">
              I&apos;m a software developer with a range of experience spanning{" "}
              <strong>full-stack development</strong>,{" "}
              <strong>machine learning</strong>, <strong>mobile apps</strong>,
              and <strong>automation</strong>. Currently building
              client-facing applications at IBM — previously at Canadian Special
              Operations Forces Command, University of Toronto, and Seleste.
            </p>
          </div>
          <div className="cta-row">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text"
            >
              Download résumé →
            </a>
          </div>
        </div>

        <div className="col-rule" aria-hidden />

        <div className="hero-right">
              <div className="hero-photo-wrap">
          <img
            src={images.me}
            alt="Nicholas Pysklywec"
            className="hero-photo"
          />
          <div className="hero-photo-caption">Nicholas Pysklywec or just Nick! :{')'}</div>
        </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">{companyCount}</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">{projectCount}+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">ML</div>
              <div className="stat-label">& Full-Stack</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Tabs open</div>
            </div>
          </div>
          <div className="skills-inline">
            <p className="skills-inline-label">Core Technologies</p>
            <div className="skills-chips">
              {CORE_TECH.map(({ label, featured }) => (
                <span
                  key={label}
                  className={featured ? "chip featured" : "chip"}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JobDisplay />

      <footer>
        <div className="footer-strip">
          <div className="footer-cell">
            <p className="footer-cell-label">Get in touch</p>
            <p className="footer-cell-title">Let&apos;s work together</p>
            <p>
            Always open to interesting projects and conversations about software.
            </p>
            <a
              href="https://github.com/npysklyw"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/nick-py/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <div className="col-rule" aria-hidden />
          <div className="footer-cell">
            <p className="footer-cell-label">Recognition</p>
            <p className="footer-cell-title">IBM Consulting Q4 Rockstar Award 2024</p>
            <p>
              Won the IBM Consulting Q4 Rockstar Award 2024 for my work at IBM.
            </p>
            <p className="footer-cell-title">NASTA Newcomer Award 2024</p>
            <p>
              Won the NASTA Newcomer Award 2024 for my work at IBM.
            </p>
            <p className="footer-cell-title">CANSOFCOM Prize</p>
            <p>
              Won the CANSOFCOM prize at Hack the North 2021 for Video
              Summarization research. Paper published in CUCAI proceedings.
            </p>
          </div>
          <div className="col-rule" aria-hidden />
          <div className="footer-cell">
            <p className="footer-cell-label">Education</p>
            <p className="footer-cell-title">Western University</p>
            <p>
              Software Engineering graduate from the University of Western
              Ontario, with experience across AI, systems design, and product
              development.
            </p>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Download full résumé ↗
            </a>
          </div>
        </div>
        <div className="colophon">
          <p>Nicholas Pysklywec &nbsp;·&nbsp; Toronto, Canada</p>
        </div>
      </footer>
    </div>
  );
}
