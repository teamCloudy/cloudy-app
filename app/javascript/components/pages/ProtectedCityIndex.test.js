import React from "react";
import { render, screen } from "@testing-library/react"
import ProtectedCityIndex from "./ProtectedCityIndex"
import mockUserCities from "../mockUserCities"
import mockWeathers from "../mockWeathers"
import '@testing-library/jest-dom'


describe("<ProtectedCityIndex />", () => {
    const cities = mockUserCities
    const weathers = mockWeathers
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedCityIndex />, div)
    })


    it("renders without crashing with mockUserCities", () => {
        const div = document.createElement("div");
        render(<ProtectedCityIndex cities={cities} />, div);
    });

    it("renders without crashing with mockWeathers", () => {
        const div = document.createElement("div");
        render(<ProtectedCityIndex weathers={weathers} />, div);
    });

    it("has a title", () => {
        render(<ProtectedCityIndex cities={cities} />);
        expect(screen.getByText("Most Popular Cities")).toBeInTheDocument()
    })

    it("has a city name", () => {
        render(<ProtectedCityIndex cities={cities} logged_in={true} current_user={{id:1}} weathers={weathers} />);
        expect(screen.getByText("San Diego")).toBeInTheDocument()
    })

  })

