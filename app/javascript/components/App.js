import React, { useState} from "react"
import mockWeathers from "./mockWeathers"
import mockUserCities from "./mockUserCities"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import CityEdit from "./pages/CityEdit"
import CityIndex from "./pages/CityIndex"
import CityNew from "./pages/CityNew"
import CityShow from "./pages/CityShow"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedCityShow from "./pages/ProtectedCityShow"
import ProtectedCityIndex from "./pages/ProtectedCityIndex"


const App = (props) => {
  const [cities, setCities] = useState([])

  

  return (
    <BrowserRouter>
      <Header {...props}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cityindex" element={<CityIndex />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/protectedcityindex" element={<ProtectedCityIndex />} />
        <Route path="/cityshow" element={<CityShow />} />
        <Route path="/protectedcityshow" element={<ProtectedCityShow />} />
        <Route path="/citynew" element={<CityNew />} />
        <Route path="/cityedit" element={<CityEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
