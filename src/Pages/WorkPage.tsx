import { Link } from "react-router-dom";
import { ProjectCard } from "../Components/ProjectCard";
import {
  earlierStudies,
  featuredProjects,
  publicArchive,
} from "../content/projects";

export function WorkPage() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Work / Curated index</p>
        <h1>
          Selected systems
          <br />
          and an earlier study.
        </h1>
        <p>
          A focused record of current product work, technical decisions, and one
          formative computer-vision project.
        </p>
      </header>
      <section aria-labelledby="featured-work-title">
        <div className="index-heading">
          <p className="eyebrow">01 / Selected systems</p>
          <h2 id="featured-work-title">Current work</h2>
          <p>Active systems with complete case-study records.</p>
        </div>
        <div className="featured-grid work-grid featured-grid-curated">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="section earlier-study" aria-labelledby="study-title">
        <div className="section-heading">
          <p className="eyebrow">02 / Earlier study</p>
          <h2 id="study-title">University capstone.</h2>
          <p>
            Retained for technical breadth; deliberately subordinate to current
            work.
          </p>
        </div>
        {earlierStudies.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 2} />
        ))}
      </section>
      {publicArchive.length > 0 && (
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">03 / Compact archive</p>
            <h2>Additional breadth.</h2>
            <p>
              One distributed-systems study with a distinct engineering story.
            </p>
          </div>
          <div className="archive-list">
            {publicArchive.map((p) => (
              <Link to={`/work/${p.slug}`} key={p.slug}>
                <span>{p.year}</span>
                <strong>{p.title}</strong>
                <span>{p.kind}</span>
                <span>{p.stack.join(" · ")}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
      <aside className="future-slot">
        <span>Future record</span>
        <p>
          The system is prepared for another verified case study when sufficient
          material exists. Nothing speculative is published.
        </p>
      </aside>
    </main>
  );
}
