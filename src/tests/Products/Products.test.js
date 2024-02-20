import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Products from "../../component/Products/Products.js";

test("should have a heading with text 'Our Products'", () => {
  render(<Products />);
  const heading = screen.getByText(/Our Products/i);
  expect(heading).toBeInTheDocument();
});

test("should match screenshot of Products component", () => {
  const { container } = render(<Products />);
  expect(container).toMatchSnapshot();
});
