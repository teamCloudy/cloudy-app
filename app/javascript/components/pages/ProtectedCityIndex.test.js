import React from "react";
import { render } from "@testing-library/react"
import ProtectedCityIndex from "./ProtectedCityIndex"
import cities from "../mockUserCities"
import weathers from "../mockWeathers"

describe("<ProtectedCityIndex />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<ProtectedCityIndex cities={cities} weathers={weathers}  />, div)
    })
})