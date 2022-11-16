import React from "react";
import { render } from "@testing-library/react"
import ProtectedCityIndex from "./ProtectedCityIndex"

describe("<ProtectedCityIndex />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedCityIndex />, div)
    })
})