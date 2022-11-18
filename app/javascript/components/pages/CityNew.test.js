import React from "react";
import { render, screen} from "@testing-library/react"
import CityNew from "./CityNew"
import "@testing-library/jest-dom"

describe("<CityNew />", () => {
    it("renders form without crashing", () => {
      const div = document.createElement("div")
      render(<CityNew />, div)
    })
    it("renders form", () => {
    const div = document.createElement("div")
    render(<CityNew />, div)
    const newCity = screen.getByText("City")
    expect(newCity).toBeInTheDocument()
    const newCountry = screen.getByText("Country")
    expect(newCountry).toBeInTheDocument()
    const newNote = screen.getByText("Notes")
    expect(newNote).toBeInTheDocument()
  })
  })

  it("renders the form input", () => {
    const div = document.createElement("div")
    render(<CityNew />, div)
    const placeholderCity = screen.getByPlaceholderText("Enter City")
    expect(placeholderCity).toBeInTheDocument("Enter City")
    const placeholderCountry = screen.getByText("SELECT COUNTRY")
    expect(placeholderCountry).toBeInTheDocument("SELECT COUNTRY")
    const placeholderNotes = screen.getByPlaceholderText("(Optional)")
    expect(placeholderNotes).toBeInTheDocument("(Optional)")
})