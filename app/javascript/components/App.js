import React, { useEffect, useState} from "react"
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
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState(mockWeathers);
  
  useEffect(() => {
    readCities()
  }, [])

  const readCities = () => {
    fetch("/user_cities")
    .then((response) => response.json())
    .then((payload) => {
      setCities(payload)
    })
    .catch((errors) => console.log(errors))
  }
  
  const createCity = (newCity) => {
    fetch("/user_cities", {
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json"
      },
    method: "POST"
  })
  .then((response) => response.json())
  .then(() => readCities())
  .catch((errors) => console.log(errors))
  }
  return (
    <BrowserRouter>
      <Header {...props}/>
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route path="/cityindex" element={<CityIndex cities={cities} weathers={weathers} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/protectedcityindex" element={<ProtectedCityIndex cities={cities} weathers={weathers} {...props}/>} />
        <Route path="/cityshow" element={<CityShow />} />
        <Route path="/protectedcityshow" element={<ProtectedCityShow />} />
        <Route path="/citynew" element={<CityNew cities={cities} weathers={weathers} createCity={createCity} {...props} />} />
        <Route path="/cityedit" element={<CityEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App