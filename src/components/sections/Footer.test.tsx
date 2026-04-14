import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "./Footer";
import "@testing-library/jest-dom";

if (typeof TextEncoder === "undefined") {
  const { TextEncoder, TextDecoder } = require("util");
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const mockScrollTo = jest.fn();
Object.defineProperty(window, "scrollTo", { value: mockScrollTo, writable: true });

global.requestAnimationFrame = (callback) => setTimeout(callback, 0) as any;

describe("Footer Component", () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
    document.body.innerHTML = `
      <div id="hero"></div>
      <div id="features"></div>
      <div id="benefits"></div>
    `;
  });

  it("renders the brand logo and correct copyright year", () => {
    render(<Footer />);
    const brandElements = screen.getAllByText(/FlowPilot/i);
    expect(brandElements[0]).toBeInTheDocument();
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });

  it("renders the navigation links in the Product column", () => {
    render(<Footer />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Benefits")).toBeInTheDocument();
  });

  it("triggers the scroll function when a navigation link is clicked", (done) => {
    render(<Footer />);
    
    const featuresBtn = screen.getByText("Features");
    fireEvent.click(featuresBtn);

    setTimeout(() => {
      try {
        expect(mockScrollTo).toHaveBeenCalled();
        done();
      } catch (error) {
        done(error);
      }
    }, 10);
  });

  it("renders social icons with correct external links", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("href", "https://github.com/fBarahonaS/flow-pilot");
  });

  it("is center-aligned on mobile via class checks", () => {
    const { container } = render(<Footer />);
    const centeredDiv = container.querySelector(".items-center.text-center");
    expect(centeredDiv).toBeInTheDocument();
  });
});
