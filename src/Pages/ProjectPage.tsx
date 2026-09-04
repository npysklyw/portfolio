import { Link, useParams } from "react-router-dom";
import { ProjectVisual } from "../Components/ProjectVisual";
import {
  earlierStudies,
  featuredProjects,
  getProject,
  projects,
} from "../content/projects";
import type { SystemStage } from "../content/types";

function Architecture({
  summary,
  stages,
}: {
  summary: string;
  stages: SystemStage[];
}) {
  return (
    <section className="case-section architecture-section">
      <div className="architecture-intro">
        <p className="eyebrow">03 / System</p>
        <h2>Architecture.</h2>
        <p>{summary}</p>
        <div className="status-key">
          <span>
            <i />
            Current
          </span>
          {stages.some((s) => s.status === "planned") && (
            <span>
              <i className="planned" />
              Planned
            </span>
          )}
        </div>
      </div>
      <ol className="architecture-flow">
        {stages.map((stage, index) => (
          <li
            className={stage.status === "planned" ? "planned" : ""}
            key={stage.label}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{stage.label}</strong>
            <p>{stage.detail}</p>
            {stage.status === "planned" && <small>Planned</small>}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const publicProjects = [...featuredProjects, ...earlierStudies];
  if (!project || !publicProjects.includes(project))
    return (
      <main className="not-found">
        <p className="eyebrow">404 / Record absent</p>
        <h1>That project is not in the public selection.</h1>
        <Link to="/work">Return to work →</Link>
      </main>
    );
  const index = projects.indexOf(project);
  const publicIndex = publicProjects.indexOf(project);
  const next =
    publicProjects[(Math.max(publicIndex, 0) + 1) % publicProjects.length];
  const reflectionNumber = project.verification
    ? "06"
    : project.system
      ? "05"
      : "04";
  return (
    <main className="case-study">
      <Link className="back-link" to="/work">
        ← Work index
      </Link>
      <header className="case-header">
        <div>
          <p className="eyebrow">
            Record {String(index + 1).padStart(2, "0")} / {project.year}
          </p>
          <h1>{project.title}</h1>
          <p className="case-outcome">{project.outcome}</p>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{project.kind}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
          <div className="case-links">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                {project.demoLabel ?? "Live demo"} ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                Source repository ↗
              </a>
            )}
          </div>
        </div>
        <ProjectVisual
          kind={project.visual}
          label={project.title}
          image={project.coverImage}
          detailed
        />
      </header>
      <section className="case-section">
        <p className="eyebrow">01 / Brief</p>
        <h2>The context.</h2>
        <p className="large-copy">{project.context}</p>
      </section>
      {project.contribution.length > 0 && (
        <section className="case-section split">
          <div>
            <p className="eyebrow">02 / Contribution</p>
            <h2>What I built.</h2>
          </div>
          <ol>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      )}
      {project.system && (
        <Architecture
          summary={project.system.summary}
          stages={project.system.stages}
        />
      )}
      {project.decisions.length > 0 && (
        <section className="case-section">
          <p className="eyebrow">{project.system ? "04" : "03"} / Decisions</p>
          <h2>Choices and trade-offs.</h2>
          <div className="decision-grid">
            {project.decisions.map((decision, n) => (
              <article key={decision.title}>
                <span>0{n + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.detail}</p>
              </article>
            ))}
          </div>
          {project.evidence && (
            <aside className="case-evidence">
              <p className="eyebrow">Supporting example</p>
              <h3>{project.evidence.title}</h3>
              <p>{project.evidence.detail}</p>
            </aside>
          )}
        </section>
      )}
      {project.verification && (
        <section className="case-section verification-section">
          <div>
            <p className="eyebrow">05 / Verification</p>
            <h2>Current checks.</h2>
          </div>
          <ul>
            {project.verification.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </section>
      )}
      <section className="case-section split">
        <div>
          <p className="eyebrow">{reflectionNumber} / Reflection</p>
          <h2>Limits and next steps.</h2>
        </div>
        <p className="large-copy">{project.reflection}</p>
      </section>
      <Link className="next-project" to={`/work/${next.slug}`}>
        <span>Next public record</span>
        <strong>{next.title}</strong>
        <span>→</span>
      </Link>
    </main>
  );
}
