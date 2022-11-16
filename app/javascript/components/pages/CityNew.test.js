import React from "react";
import { render } from "@testing-library/react"
import CityNew from "./CityNew"

describe("<CityNew />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<CityNew />, div)
    })
})