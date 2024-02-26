import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutUs from "../../component/aboutUs/AboutUs.js";

test("should have a heading with text 'Welcome To Carenbit'", () => {
  render(<AboutUs />);
  const heading = screen.getByText(/Welcome To Carenbit/i);
  expect(heading).toBeInTheDocument();
});

test("should have a heading with text 'Vision'", () => {
  render(<AboutUs />);
  const heading = screen.getAllByText(/Vision/i);
  expect(heading).toHaveLength(2);
});

test("should have a heading with text 'Mission'", () => {
  render(<AboutUs />);
  const heading = screen.getByText(/Mission/i);
  expect(heading).toBeInTheDocument();
});

test("should match screenshot of AboutUs component", () => {
  const { container } = render(<AboutUs />);
  expect(container).toMatchSnapshot();
});
