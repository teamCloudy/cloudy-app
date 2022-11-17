import React from "react";
import { render } from "@testing-library/react";
import CityIndex from "./CityIndex";
import mockUserCities from "../mockUserCities";
import mockWeathers from "../mockWeathers";

describe("<CityIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<CityIndex />, div);
  });

    it("renders without crashing with mockUserCities", () => {
      const div = document.createElement("div");
      render(<CityIndex mockUserCities={mockUserCities} />, div);
    });

    it("renders without crashing with mockWeathers", () => {
      const div = document.createElement("div");
      render(<CityIndex mockWeathers={mockWeathers} />, div);
    });

});
