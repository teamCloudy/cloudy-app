import React from "react";
import { render } from "@testing-library/react"
import CityIndex from "./CityIndex"

describe("<CityIndex />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<CityIndex />, div)
    })
})