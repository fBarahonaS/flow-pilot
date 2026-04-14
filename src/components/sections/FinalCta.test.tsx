import { render, screen } from "@testing-library/react";
import { FinalCta } from "./FinalCta";

describe("FinalCta", () => {
  it('has a "Schedule a Demo" happy path link', () => {
    render(<FinalCta />);

    const cta = screen.getByRole("link", { name: /schedule a demo/i });
    expect(cta).toBeVisible();
    expect(cta).toHaveAttribute("href", "#schedule-demo");
  });
});

