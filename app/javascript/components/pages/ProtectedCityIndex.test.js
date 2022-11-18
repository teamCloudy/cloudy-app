import React from "react";
import { render } from "@testing-library/react"
import ProtectedCityIndex from "./ProtectedCityIndex"
import mockUserCities from "../mockUserCities"
import mockWeathers from "../mockWeathers"
import '@testing-library/jest-dom'

describe("<ProtectedCityIndex />", () => {

    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedCityIndex />, div)
    })


    it("renders without crashing with mockUserCities", () => {
        const div = document.createElement("div");
        render(<ProtectedCityIndex mockUserCities={mockUserCities} />, div);
    });

    it("renders without crashing with mockWeathers", () => {
        const div = document.createElement("div");
        render(<ProtectedCityIndex mockWeathers={mockWeathers} />, div);
    });


})

