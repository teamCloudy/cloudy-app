import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CityIndex = ({ cities, weathers }) => {
  return (
    <>
      <div>
        <h3 className="centerTitle">Popular Cities</h3>
        <div className="centerCard">
          {cities?.map((city, index) => {
            const weather = weathers?.filter(
              (weather) => city.weather_id === weather.id
            );

            if (city.private === false) {
              return (
                <Card style={{ width: "210px", height: "400px" }} key={index}>
                  <CardBody>
                    <CardTitle key={index}>
                      <h4>{city.city_name}</h4>
                    </CardTitle>
                    <CardSubtitle>
                      {city.country_name}
                      <br />
                      <img src={weather[0]?.icon} />
                      {console.log("WEATHER", weather[0]?.icon)}
                      <h3>{weather[0]?.temperature} &#176;</h3>
                      <br />
                      <strong>Last Updated: </strong>
                      <br />
                      {weather[0]?.date}
                      <h5>{weather[0]?.time}</h5>
                      <br />
                    </CardSubtitle>
                    <NavLink to={`/cityshow/${city.id}`} className="nav-link">
                      <Button> See More Details</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              );
              // } else if (city.private === true) {
              //   return (
              //     <Card style={{ width: "210px", height: "210px" }} key={index}>
              //       <CardBody>
              //         <CardTitle key={index}>{city.city_name}</CardTitle>
              //         <CardSubtitle>
              //           {city.country_name}
              //           <br />
              //         </CardSubtitle>
              //         <NavLink to={`/cityshow/${city.id}`} className="nav-link">
              //           <Button> See More Details</Button>
              //         </NavLink>
              //       </CardBody>
              //     </Card>
              //   );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CityIndex;
