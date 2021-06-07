import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

test("renders Button", () => {
  render(<Button type="button" name="testBtn" />);

  const btn = screen.getByText(/testBtn/i);

  expect(btn).toBeInTheDocument();
});
