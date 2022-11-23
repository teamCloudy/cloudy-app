import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CityIndex = ({ cities, weathers }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle"> Most Popular Cities</h3>
        <div className="centerCard">
          {cities?.map((city, index) => {
            let weather = weathers?.filter(
              (weather) => city.weather_id === weather.id
            );

            if (city.private === false) {
              return (
                <Card style={{ width: "210px", height: "210px" }} key={index}>
                  <CardBody>
                    <CardTitle key={index}>{city.city_name}</CardTitle>
                    <CardSubtitle>
                      {city.country_name}
                      <br />
                      {weather[0]?.temperature}
                      <br />
                      {weather[0]?.time}
                      <br />
                      {weather[0]?.date}
                    </CardSubtitle>
                    <NavLink to={`/cityshow/${city.id}`} className="nav-link">
                      <Button> See More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              );
            } else if (city.private === true) {
              return (
                <Card style={{ width: "210px", height: "210px" }} key={index}>
                  <CardBody>
                    <CardTitle key={index}>{city.city_name}</CardTitle>
                    <CardSubtitle>
                      {city.country_name}
                      <br />
                    </CardSubtitle>
                    <NavLink to={`/cityshow/${city.id}`} className="nav-link">
                      <Button> See More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CityIndex;
