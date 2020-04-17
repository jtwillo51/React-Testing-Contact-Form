import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("Form renders", () => {
  render(<ContactForm />);
});

test("getting inputs from DOM correctly", () => {
  const { findAllByRole} = render(<ContactForm/>)
  const reset = findAllByRole(/button/i)
  console.log(reset)
}
)
