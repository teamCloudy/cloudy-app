import React from "react";
import { render } from "@testing-library/react"
import CityShow from "./CityShow"

describe("<CityShow />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<CityShow />, div)
    })
})