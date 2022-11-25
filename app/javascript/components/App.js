import React, { useEffect, useState } from "react";
import mockWeathers from "./mockWeathers";
import mockUserCities from "./mockUserCities";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CityEdit from "./pages/CityEdit";
import CityIndex from "./pages/CityIndex";
import CityNew from "./pages/CityNew";
import CityShow from "./pages/CityShow";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedCityShow from "./pages/ProtectedCityShow";
import ProtectedCityIndex from "./pages/ProtectedCityIndex";

const App = (props) => {
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    readCities();
  }, []);

  useEffect(() => {
    readWeathers();
  }, []);

  const readCities = () => {
    fetch("/user_cities")
      .then((response) => response.json())
      .then((payload) => {
        setCities(payload);
      })
      .catch((errors) => console.log(errors));
  };

  const readWeathers = () => {
    fetch("/weathers")
      .then((response) => response.json())
      .then((payload) => {
        setWeathers(payload);
      })
      .catch((errors) => console.log(errors));
  };

  const createCity = (newCity) => {
    fetch("/user_cities", {
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readCities())
      .catch((errors) => console.log(errors));
  };

  const editNotes = (updateNotes, id) => {
    fetch(`/user_cities/${id}`, {
      body: JSON.stringify(updateNotes),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readCities())
      .catch((errors) => console.log(errors));
  };

  const deleteCity = (id) => {
    fetch(`/user_cities/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readCities())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route
          path="/cityindex"
          element={<CityIndex cities={cities} weathers={weathers} {...props} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/protectedcityindex"
          element={
            <ProtectedCityIndex
              cities={cities}
              weathers={weathers}
              {...props}
              deleteCity={deleteCity}
            />
          }
        />
        <Route
          path="/cityshow/:id"
          element={<CityShow cities={cities} weathers={weathers} />}
        />
        <Route
          path="/protectedcityshow/:id"
          element={
            <ProtectedCityShow
              cities={cities}
              weathers={weathers}
              {...props}
              deleteCity={deleteCity}
            />
          }
        />
        <Route
          path="/citynew"
          element={
            <CityNew weathers={weathers} createCity={createCity} {...props} />
          }
        />
        <Route
          path="/cityedit/:id"
          element={
            <CityEdit
              cities={cities}
              weathers={weathers}
              {...props}
              editNotes={editNotes}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
