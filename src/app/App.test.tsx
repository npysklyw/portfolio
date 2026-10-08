import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { ProjectVisual } from "../Components/ProjectVisual";
describe("portfolio", () => {
  it("renders positioning and navigation", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Builds software systems",
    );
    expect(
      screen.getByRole("navigation", { name: "Primary" }),
    ).toBeInTheDocument();
  });

  it("keeps the public work index deliberately curated", () => {
    render(
      <MemoryRouter initialEntries={["/work"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Sentiment Terminal" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "MESBG Army Builder" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Exercise Correction" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Enterprise Endgame Evaluator"),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("ImageShare")).not.toBeInTheDocument();
    expect(screen.queryByText("Future record")).not.toBeInTheDocument();
  });

  it("does not publish archived project routes", () => {
    render(
      <MemoryRouter initialEntries={["/work/image-share"]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", {
        name: "That project is not in the public selection.",
      }),
    ).toBeInTheDocument();
  });

  it("presents MESBG as a verified offline-first system", () => {
    render(
      <MemoryRouter initialEntries={["/work/mesbg-army-builder"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Demo video ↗" })).toHaveAttribute(
      "href",
      "https://youtube.com/shorts/LYcpOo4tMMY?feature=share",
    );
    expect(
      screen.getByText("57 domain, catalogue, and storage tests"),
    ).toBeInTheDocument();
    expect(screen.getByText("LocalArmyRepository")).toBeInTheDocument();
    expect(
      screen.getByText(/production-ready multi-device synchronization/),
    ).toBeInTheDocument();
  });

  it.each(["/", "/work"])(
    "orders and numbers the public projects on %s",
    (path) => {
      render(
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>,
      );
      const headings = screen.getAllByRole("heading", { level: 3 });
      expect(
        headings.slice(0, 4).map((heading) => heading.textContent),
      ).toEqual([
        "Benchwarden",
        "Sentiment Terminal",
        "MESBG Army Builder",
        "Exercise Correction",
      ]);
      expect(screen.getByText("04 / 2022")).toBeInTheDocument();
    },
  );

  it.each([
    ["benchwarden", "sentiment-terminal"],
    ["sentiment-terminal", "mesbg-army-builder"],
    ["mesbg-army-builder", "exercise-correction"],
    ["exercise-correction", "benchwarden"],
  ])("links from %s to the next public project", (slug, next) => {
    render(
      <MemoryRouter initialEntries={[`/work/${slug}`]}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("link", { name: /Next public record/ }),
    ).toHaveAttribute("href", `/work/${next}`);
  });

  it("presents Benchwarden's implemented scope and repository", () => {
    render(
      <MemoryRouter initialEntries={["/work/benchwarden"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Benchwarden",
    );
    expect(
      screen.getByRole("link", { name: "Source repository ↗" }),
    ).toHaveAttribute("href", "https://github.com/npysklyw/Benchwarden");
    expect(
      screen.queryByRole("link", { name: /Live demo/ }),
    ).not.toBeInTheDocument();
    expect(screen.getByText(/separate from my IBM work/)).toBeInTheDocument();
    expect(screen.getByText(/foundation shell/)).toBeInTheDocument();
  });

  it("gives repeated Benchwarden diagrams unique accessible descriptions", () => {
    render(
      <>
        <ProjectVisual kind="benchwarden" label="Benchwarden" />
        <ProjectVisual kind="benchwarden" label="Benchwarden" detailed />
      </>,
    );
    const diagrams = screen.getAllByRole("img");
    const ids = diagrams.flatMap((diagram) =>
      diagram.getAttribute("aria-labelledby")!.split(" "),
    );
    expect(new Set(ids).size).toBe(4);
    ids.forEach((id) =>
      expect(document.getElementById(id)).toBeInTheDocument(),
    );
  });
});
