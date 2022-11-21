import React from "react";
import { render, screen } from "@testing-library/react"
import AboutUs from "./AboutUs"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import { Card, Button, Row, CardBody, CardTitle } from "reactstrap"


describe("<AboutUs />", () => {
    it ("renders without crashing", () => {
        const div = document.createElement("div")
        render(<AboutUs />, div)
    })

    it("renders welcome message", () => {
        render(<AboutUs />);
        expect(screen.getByText("Meet the Team")).toBeInTheDocument();
    })

    it("has a Button", () => {
        render(<AboutUs />);
        userEvent.click(screen.getByText("My LinkedIn"))
        expect(screen.getByText("My LinkedIn")).toBeInTheDocument()
    })

   
})