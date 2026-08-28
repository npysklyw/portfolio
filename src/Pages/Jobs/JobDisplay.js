import React, { useState, useEffect, useCallback } from "react";
import sampleJobData from "../../data/jobs.json";
import images from "../../assets/img/images";
import sampleProjectData from "../../data/projects.json";
import "./JobDisplay.css";

function safeHref(url) {
  if (!url || typeof url !== "string" || !url.trim()) return null;
  const t = url.trim();
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t}`;
}

function ProjectModal({ project, projectIndex, totalProjects, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const {
    name,
    short,
    skills,
    description,
    demo,
    github,
    information,
  } = project;

  const num = String(projectIndex + 1).padStart(2, "0");
  const demoUrl = safeHref(demo);
  const githubUrl = safeHref(github);

  const overlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay open"
      role="presentation"
      onClick={overlayClick}
    >
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <p className="modal-kicker">
            Project {num} of {totalProjects}
          </p>
          <h2 className="modal-title" id="project-modal-title">
            {name}
          </h2>
          {short ? <p className="modal-short">{short}</p> : null}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          {skills?.length > 0 && (
            <div className="modal-skills">
              {skills.map((skill, i) => (
                <span key={i} className="modal-skill">
                  {skill}
                </span>
              ))}
            </div>
          )}
          {description ? <p className="modal-desc">{description}</p> : null}
          {information?.title ? (
            <h3 className="modal-info-title">{information.title}</h3>
          ) : null}
          {information?.mainDescription ? (
            <p className="modal-detail">{information.mainDescription}</p>
          ) : null}
          {information?.images?.length > 0 && (
            <div className="modal-image-grid">
              {information.images.map((img, index) => (
                <div key={index}>
                  <div className="modal-image-card">
                    <img
                      src={images[img.imageName]}
                      alt={img.imageDescription || ""}
                    />
                  </div>
                  {img.imageDescription ? (
                    <p className="modal-image-caption">{img.imageDescription}</p>
                  ) : null}
                </div>
              ))}
            </div>
          )}
          <div className="modal-links">
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link primary"
              >
                Live Demo ↗
              </a>
            ) : null}
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link ghost"
              >
                View on GitHub ↗
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function JobDisplay() {
  const jobs = sampleJobData;
  const projects = sampleProjectData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openProject = useCallback((project, index) => {
    setSelectedProject(project);
    setSelectedIndex(index);
  }, []);

  const closeProject = useCallback(() => setSelectedProject(null), []);

  const roleCount = jobs.length;
  const experienceSubtitle =
    roleCount === 1
      ? "One role"
      : `${roleCount} Roles — 2021 to Present`;

  return (
    <div className="job-display-root">
      <section className="section-band" id="experience">
        <div className="section-label-bar">
          <h2>Professional Experience</h2>
          <span>{experienceSubtitle}</span>
        </div>
        <div className="experience-grid">
          {jobs.map((job, index) => {
            const isCurrent =
              index === 0 || /current/i.test(job.date || "");
            const indexLabel = isCurrent
              ? `${String(index + 1).padStart(2, "0")} / Current`
              : String(index + 1).padStart(2, "0");
            const dateLine = [job.date, job.loc].filter(Boolean).join(" · ");

            return (
              <article key={index} className="exp-card">
                {isCurrent ? (
                  <div
                    className="exp-current"
                    title="Current role"
                    aria-hidden
                  />
                ) : null}
                <div className="exp-index">{indexLabel}</div>
                <div className="exp-org">{job.org}</div>
                <div className="exp-role">{job.name}</div>
                <div className="exp-date">{dateLine}</div>
                <p className="exp-desc">{job.description}</p>
                {job.skills?.length > 0 && (
                  <div className="exp-skills">
                    {job.skills.map((skill, i) => (
                      <span key={i} className="exp-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-band" id="projects">
        <div className="section-label-bar">
          <h2>Selected Projects</h2>
          <span>Click any row to expand</span>
        </div>
        <div className="projects-layout">
          <table className="projects-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Project</th>
                <th>Stack</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                const num = String(index + 1).padStart(2, "0");
                const demoUrl = safeHref(project.demo);
                const githubUrl = safeHref(project.github);

                return (
                  <tr
                    key={index}
                    className="proj-row"
                    onClick={() => openProject(project, index)}
                  >
                    <td className="proj-num">{num}</td>
                    <td>
                      <div className="proj-name">{project.name}</div>
                      <div className="proj-short">{project.short}</div>
                    </td>
                    <td>
                      <div className="proj-skills-cell">
                        {project.skills?.map((s, i) => (
                          <span key={i} className="proj-skill-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div className="proj-links">
                        {demoUrl ? (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Demo ↗
                          </a>
                        ) : null}
                        {githubUrl ? (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub ↗
                          </a>
                        ) : null}
                        <button
                          type="button"
                          className="proj-expand-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openProject(project, index);
                          }}
                        >
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          projectIndex={selectedIndex}
          totalProjects={projects.length}
          onClose={closeProject}
        />
      ) : null}
    </div>
  );
}

export default JobDisplay;
