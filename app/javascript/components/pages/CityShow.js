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
   
      <div class="bg-image show-city-bg ">
        {/* change the class name for mask*/}
        <div class="mask-show"> 

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
                          <h5>{weather[0].time}</h5>

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
                          <button class="btn btn-outline-secondary col-5 col-3 m-3 btn-lg btn-home btn-notfound">BACK</button>
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
   
    </>
  );
};

export default CityShow;
