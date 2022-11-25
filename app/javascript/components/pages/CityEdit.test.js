import React from "react";
import { render } from "@testing-library/react";
import CityEdit from "./CityEdit";

describe("<CityEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<CityEdit />, div);
  });

  it("renders the note text-box", () => {
    const div = document.createElement("div");
    render(<CityEdit />, div);
    const updateNote = screen.getByText("Notes");
  });
});
