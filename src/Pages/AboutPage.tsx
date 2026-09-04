import { experience } from "../content/experience";
export function AboutPage() {
  return (
    <main className="page">
      <header className="about-header">
        <p className="eyebrow">About / Nicholas Pysklywec</p>
        <h1>
          I build software that makes complex systems clearer and more useful.
        </h1>
        <div>
          <p>
            I'm a Toronto-based software engineer working across full-stack
            applications, mobile products, applied machine learning, and
            automation.
          </p>
          <p>
            Currently at IBM, I contribute to client-facing software.
            Previously, I worked on smart-glasses features, computer-vision
            pipelines, and high-performance geophysical simulations.
          </p>
        </div>
      </header>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>
            From research
            <br />
            to production.
          </h2>
        </div>
        <div className="ledger">
          {experience.map((j, i) => (
            <article key={j.organization}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{j.organization}</h3>
                <p>{j.role}</p>
              </div>
              <p>{j.summary}</p>
              <div className="ledger-date">
                {j.period}
                <br />
                {j.location}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
