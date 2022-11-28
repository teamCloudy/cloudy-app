import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col, CardImg, CardImgOverlay } from "reactstrap";

const CityShow = ({ cities, weathers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const showCity = cities?.find((city) => city.id === +id);
  const weather = weathers?.filter(
    (weather) => showCity.weather_id === weather.id
  );
  return (
    <>
    <div class="show-main">
      <div class="bg-image show-city-bg ">
        <div class="mask-popular-cities">

          <h1 className="popular-cities-title">MORE DETAILS</h1>
          <main className="show-city-cards">

            {showCity && (
              <Row>
                <Col sm="4">

                  <Card className="card-show card-show-bg-image">
                    <div class="mask-card-show-city">

                      <CardBody>
                        <CardTitle>
                          <h4>{showCity.city_name}</h4>
                        </CardTitle>
                        <CardSubtitle>
                          {showCity.country_name}
                          <br />
                          <img src={weather[0]?.icon} />
                          <h3>{weather[0].temperature} &#176;</h3>
                          <br />
                          <strong>Last Updated: </strong>
                          <br />
                          <p>{weather[0].date}</p>
                          <h5>{weathers[0].time}</h5>

                          <hr className="my-4 separate-show" />
                          <strong>Weather: </strong>
                          {weather[0].current_weather}

                          <br />
                          <strong className="my-4">UV Index: </strong>
                          {weather[0].uv_index}
                          <br />
                          <strong>Wind Speed: </strong>
                          {weather[0].wind_speed}
                          <br />
                          <strong>Humidity: </strong>
                          {weather[0].humidity}%
                          <br />
                          <strong>Description: </strong>
                          <br />
                          {weather[0].description}
                          <br />
                        </CardSubtitle>
                        <NavLink to="/cityindex" className="nav-link">
                          <Button className="back-btn-show">Back</Button>
                        </NavLink>
                      </CardBody>
                    </div>
                  </Card>
                </Col>
              </Row>

            )}

          </main>
        </div>
      </div>
      </div>
    </>
  );
};

export default CityShow;
