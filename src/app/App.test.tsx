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
  });
});
