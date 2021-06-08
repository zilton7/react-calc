import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quote from "../../components/Quote";

describe("renders Quote", () => {
  test("has Article", () => {
    render(<Quote />);
    const el = screen.getByText(/Mathematics is not about numbers/i);
    expect(el).toBeInTheDocument();
  });
});
