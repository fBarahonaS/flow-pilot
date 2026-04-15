import { render, screen, act } from "@testing-library/react";
import { Benefits } from "./Benefits";

describe("Benefits", () => {
  it("renders all three key benefit headlines", async () => {
    await act(async () => {
      render(<Benefits />);
    });
    
    expect(screen.getByText(/Reclaim Focused Engineering Time/i)).toBeInTheDocument();
    expect(screen.getByText(/Eliminate Knowledge Silos/i)).toBeInTheDocument();
    expect(screen.getByText(/Predictable Delivery Cycles/i)).toBeInTheDocument();
  });

  it("renders descriptions for each benefit", () => {
    render(<Benefits />);
    
    expect(screen.getByText(/Reduce context-switching by 40%/i)).toBeInTheDocument();
    expect(screen.getByText(/Instant onboarding for new hires/i)).toBeInTheDocument();
    expect(screen.getByText(/Stop guessing ship dates/i)).toBeInTheDocument();
  });

  it("maintains semantic structure for accessibility", () => {
    render(<Benefits />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings).toHaveLength(3);
  });
});
