import React from "react";
import { render, screen } from "@testing-library/react";
import CityEdit from "./CityEdit";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<CityEdit />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<CityEdit />, div);
  });

  // it("renders note form", () => {
  //   const div = document.createElement("div");
  //   render(
  //     <BrowserRouter>
  //       <CityEdit />, div
  //     </BrowserRouter>
  //   );
  //   const updateNote = screen.getByText("Notes");
  //   expect(updateNote).toBeInTheDocument();
  // });
});
