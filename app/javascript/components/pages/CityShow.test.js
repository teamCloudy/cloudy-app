import React from "react";
import { render, screen } from "@testing-library/react";
import CityShow from "./CityShow";
import mockUserCities from "../mockUserCities";
import mockWeathers from "../mockWeathers";
import { BrowserRouter } from "react-router-dom";

describe("<CityShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <CityShow />, div;
      </BrowserRouter>
    );
  });

  it("renders without crashing with mockUserCities", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <CityShow mockUserCities={mockUserCities} />, div;
      </BrowserRouter>
    );
  });

  it("renders without crashing with mockWeathers", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <CityShow mockWeathers={mockWeathers} />, div;
      </BrowserRouter>
    );
  });
});
