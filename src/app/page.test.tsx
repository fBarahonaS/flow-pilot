import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("app/page", () => {
  it("renders without crashing and shows the primary CTAs", () => {
    render(<Page />);

    expect(
      screen.getByRole("link", { name: /get started/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /watch demo/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /schedule a demo/i }),
    ).toBeInTheDocument();
  });
});

