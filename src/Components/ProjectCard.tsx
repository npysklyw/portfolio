import { Link } from "react-router-dom";
import type { Project } from "../content/types";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <Link to={`/work/${project.slug}`} className="visual-link">
        <ProjectVisual
          kind={project.visual}
          label={project.title}
          image={project.coverImage}
        />
      </Link>
      <div className="project-meta">
        <span>
          {String(index + 1).padStart(2, "0")} / {project.year}
        </span>
        <span>{project.kind}</span>
      </div>
      <h3>
        <Link to={`/work/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.outcome}</p>
      <div className="stack" aria-label="Technology stack">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </article>
  );
}
