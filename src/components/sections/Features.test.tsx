import { render, screen } from "@testing-library/react";
import { Features } from "./Features";

describe("Features", () => {
  it("renders all feature titles", () => {
    render(<Features />);

    expect(
      screen.getByRole("heading", { name: /context-aware graph/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /async team intelligence/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /live velocity tracking/i }),
    ).toBeInTheDocument();
  });
});

