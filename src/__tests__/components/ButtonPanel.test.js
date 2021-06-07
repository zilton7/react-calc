import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonPanel from "../../components/ButtonPanel";

describe("renders ButtonPanel", () => {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "*",
    "=",
    "-",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];
  buttons.forEach((button) => {
    test(`has ${button} button`, () => {
      render(<ButtonPanel />);

      const btn = screen.getByText(button);

      expect(btn).toBeInTheDocument();
    });
  });
});
