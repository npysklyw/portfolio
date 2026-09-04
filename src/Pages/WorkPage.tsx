import { ProjectCard } from "../Components/ProjectCard";
import { earlierStudies, featuredProjects } from "../content/projects";

export function WorkPage() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Work / Curated index</p>
        <h1>Selected work.</h1>
        <p>
          Two current projects and an earlier computer-vision capstone, with
          implementation notes and technical decisions.
        </p>
      </header>
      <section aria-labelledby="featured-work-title">
        <div className="index-heading">
          <p className="eyebrow">01 / Selected systems</p>
          <h2 id="featured-work-title">Current work</h2>
          <p>
            Current projects with implementation notes and technical decisions.
          </p>
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
            A university capstone in pose analysis, mobile development, and
            backend integration.
          </p>
        </div>
        {earlierStudies.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 2} />
        ))}
      </section>
    </main>
  );
}
