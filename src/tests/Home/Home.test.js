import "@testing-library/jest-dom";
import Home from "../../component/Home/Home.js";
import { render, screen } from "@testing-library/react";

test("renders Home component", () => {
  render(<Home />);
  const linkElement = screen.getAllByText(/Carenbit/i);
  expect(linkElement).toHaveLength(2);
});

test("should have a quick enquiry button", () => {
  render(<Home />);
  const button = screen.getByText(/Quick Enquiry/i);
  expect(button).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Quick Enquiry/i })
  ).toBeInTheDocument();
});

test("should match screenshot of Home component", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
