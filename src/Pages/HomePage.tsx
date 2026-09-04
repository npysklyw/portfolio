import { ProjectCard } from "../Components/ProjectCard";
import { earlierStudies, featuredProjects } from "../content/projects";
import { experience } from "../content/experience";

export function HomePage() {
  return (
    <>
      <section className="hero hero-v2">
        <div className="hero-identity">
          <span>NP</span>
          <p>
            Nicholas Pysklywec
            <br />
            Software Engineer
          </p>
        </div>
        <div className="hero-statement">
          <p className="eyebrow">Interface / infrastructure</p>
          <h1>
            Builds software systems
            <br />
            <span>from interface to infrastructure.</span>
          </h1>
        </div>
        <div className="hero-metadata">
          <dl>
            <div>
              <dt>Based</dt>
              <dd>Toronto, Canada</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Full-stack / Data / Applied AI</dd>
            </div>
            <div>
              <dt>Current</dt>
              <dd>Software Developer at IBM</dd>
            </div>
            <div>
              <dt>Selected work</dt>
              <dd>
                <a href="#selected-systems">View systems ↓</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="section featured" id="selected-systems">
        <div className="section-heading">
          <p className="eyebrow">01 / Selected systems</p>
          <h2>Selected projects.</h2>
          <p>
            Two current projects with implementation notes and technical
            decisions.
          </p>
        </div>
        <div className="featured-grid featured-grid-curated">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="practice section">
        <div>
          <p className="eyebrow">02 / Engineering practice</p>
          <h2>
            Engineering across
            <br />
            the stack.
          </h2>
        </div>
        <div className="prose">
          <p>
            My work spans interfaces, services, data, and applied machine
            learning, from product flows to scheduled data pipelines.
          </p>
          <p>
            I connect architecture, product behaviour, and operational
            constraints throughout implementation.
          </p>
        </div>
        <ul className="capability-list">
          <li>
            <span>01</span>Structure product systems
          </li>
          <li>
            <span>02</span>Build interface-to-service flows
          </li>
          <li>
            <span>03</span>Develop data and ML pipelines
          </li>
          <li>
            <span>04</span>Automate repeatable work
          </li>
        </ul>
      </section>
      <section className="section earlier-study">
        <div className="section-heading">
          <p className="eyebrow">03 / Earlier study</p>
          <h2>
            Computer vision
            <br />
            in motion.
          </h2>
          <p>
            A university capstone retained for its combination of pose analysis,
            mobile development, and backend integration.
          </p>
        </div>
        {earlierStudies.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 2} />
        ))}
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">04 / Experience</p>
          <h2>Experience.</h2>
        </div>
        <div className="ledger">
          {experience.map((job, i) => (
            <article key={job.organization}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{job.organization}</h3>
                <p>{job.role}</p>
              </div>
              <p>{job.summary}</p>
              <div className="ledger-date">
                {job.period}
                <br />
                {job.location}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section recognition">
        <div>
          <p className="eyebrow">05 / Recognition</p>
          <h2>Selected notes.</h2>
        </div>
        <div className="recognition-list">
          <p>
            <span>2024</span>
            <strong>IBM Consulting Q4 Rockstar Award</strong>
          </p>
          <p>
            <span>2024</span>
            <strong>NASTA Newcomer Award</strong>
          </p>
          <p>
            <span>2021</span>
            <strong>CANSOFCOM Prize · Hack the North</strong>
          </p>
        </div>
        <div>
          <p className="eyebrow">Education</p>
          <p>
            Software Engineering
            <br />
            <strong>Western University</strong>
          </p>
        </div>
      </section>
    </>
  );
}
