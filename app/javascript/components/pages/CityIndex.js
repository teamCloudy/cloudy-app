import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

const CityIndex = ({ cities, weathers }) => {
  return (
    <>

      <div class="bg-image popular-cities-bg">
        <div class="mask-popular-cities">
          <h1 className="popular-cities-title">Popular Cities</h1>

          <main className="city-index-cards">
            {cities?.map((city, index) => {
              const weather = weathers?.filter(
                (weather) => city.weather_id === weather.id
              );

              if (city.private === false) {
                return (

                  <Row>
                    <Col xs="4">
                      <Card className="card-index" key={index}>
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
                            <Button> SEE MORE DETAILS </Button>
                          </NavLink>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

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
          </main>
        </div>
      </div>
    </>
  );
};

export default CityIndex;
