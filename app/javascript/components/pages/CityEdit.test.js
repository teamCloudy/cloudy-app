import React from "react";
import { render } from "@testing-library/react"
import CityEdit from "./CityEdit"

describe("<CityEdit />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<CityEdit />, div)
    })
})