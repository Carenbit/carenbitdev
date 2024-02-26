import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactUs from "../../component/ContactUs/ContactUs.js";

test("should have a quick enquiry button", () => {
  render(<ContactUs />);
  const button = screen.getByText(/Send message/i);
  expect(button).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Send message/i })
  ).toBeInTheDocument();
});

test('should have a input field with placeholdeer "Enter Full Name"', () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText(/Enter Full Name/i);
  expect(input).toBeInTheDocument();
});

test('should have a input field with placeholdeer "Enter Email Address"', () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText(/Enter Email Address/i);
  expect(input).toBeInTheDocument();
});

test('should have a input field with placeholdeer "Write your Message"', () => {
  render(<ContactUs />);
  const input = screen.getByPlaceholderText(/Write your Message/i);
  expect(input).toBeInTheDocument();
});

test("should match screenshot of ContactUS component", () => {
  const { container } = render(<ContactUs />);
  expect(container).toMatchSnapshot();
});
