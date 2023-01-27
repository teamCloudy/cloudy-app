import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

const ProtectedUserIndex = ({ cities, weathers, logged_in, current_user }) => {
  return (
    <>
      <div class="bg-image my-cities-bg">
        <div class="mask-my-cities">
          <h1 className="popular-cities-title">My Places </h1>
          {logged_in && (
            <main className="city-index-cards">
              {cities?.map((city, index) => {
                let weather = weathers?.filter(
                  (weather) => city.weather_id === weather.id
                );
                if (city.private === true) {
                  return (
                    <>
                      {current_user.id === city.user_id && (
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
                                  <br />
                                  <h3>{weather[0]?.temperature} &#176;</h3>
                                  <br />
                                  <strong>Last Updated: </strong>
                                  <br />
                                  {weather[0]?.date}
                                  <h5>{weather[0]?.time}</h5>
                                </CardSubtitle>
                                <NavLink
                                  to={`/protectedcityshow/${city.id}`}
                                  className="nav-link"
                                >
                                  <Button className="more-details-btn"> SEE MORE DETAILS </Button>
                                </NavLink>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      )}
                    </>
                  );
                }
              })}
            </main>
          )}

          {!logged_in && <h1> Please Log In</h1>}
          
        </div>
      </div>
    </>
  );
};

export default ProtectedUserIndex;
