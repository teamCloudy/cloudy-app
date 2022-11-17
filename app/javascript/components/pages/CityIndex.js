import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CityIndex = ({ cities, weathers }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle"> Most Popular Cities</h3>
        <div className="centerCard">
          {cities?.map((city, index) => {
            console.log(city);
            let weather = weathers?.filter(
              (weather) => city.weather_id === weather.id
            );
            console.log(weather);
            return (
              <Card style={{ width: "210px", height: "210px" }} key={index}>
                <CardBody>
                  <CardTitle key={index}>{city.city_name}</CardTitle>
                  <CardSubtitle>
                    {city.country_name}
                    <br />
                    {weather[0].temperature}
                    <br />
                    {weather[0].time}
                    <br />
                    {weather[0].date}
                  </CardSubtitle>
                  <Button> See More Details</Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CityIndex;
