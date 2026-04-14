import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders core copy and CTAs", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /orchestrate team intelligence without the friction/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /get started/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /watch demo/i })).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });

  it("uses responsive text scale classes on the headline", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading", {
      name: /orchestrate team intelligence without the friction/i,
    });
    expect(h1).toHaveClass("text-4xl");
    expect(h1).toHaveClass("sm:text-5xl");
    expect(h1).toHaveClass("lg:text-6xl");
  });
});

