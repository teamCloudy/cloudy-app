import React from "react";
import { render } from "@testing-library/react"
import ProtectedCityShow from "./ProtectedCityShow"

describe("<ProtectedCityShow />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedCityShow />, div)
    })
})