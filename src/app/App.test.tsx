import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App";
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
      "https://youtu.be/wost05aqULY",
    );
    expect(
      screen.getByText("57 domain, catalogue, and storage tests"),
    ).toBeInTheDocument();
    expect(screen.getByText("LocalArmyRepository")).toBeInTheDocument();
    expect(
      screen.getByText(/production-ready multi-device synchronization/),
    ).toBeInTheDocument();
  });
});
