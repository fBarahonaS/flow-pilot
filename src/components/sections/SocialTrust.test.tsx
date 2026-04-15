import { render, screen } from "@testing-library/react";
import { SocialTrust } from "./SocialTrust";
import "@testing-library/jest-dom";

describe("SocialTrust Component", () => {
  it("renders the section heading with correct tracking and uppercase style", () => {
    render(<SocialTrust />);
    const heading = screen.getByText(/Powering the next generation/i);
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("uppercase");
    expect(heading).toHaveClass("tracking-[0.4em]");
  });

  it("applies grayscale and opacity filters to brand items", () => {
    const { container } = render(<SocialTrust />);
    
    const brandItem = container.querySelector(".grayscale.opacity-30");
    
    expect(brandItem).toBeInTheDocument();
    expect(brandItem).toHaveClass("transition-all", "duration-500");
  });
});
