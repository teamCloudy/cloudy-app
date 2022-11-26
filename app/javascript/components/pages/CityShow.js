import React from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const CityShow = ({ cities, weathers }) => {
  const { id } = useParams();
  const showCity = cities?.find((city) => city.id === +id);
  let weather = weathers;
  const navigate = useNavigate();
  return (
    <>
      <div className="cityShowPage">
        <h3 className="centerTitle"> More Details</h3>
        {showCity && (
          <div className="centerCard">
            <Card style={{ width: "250px", height: "auto" }}>
              <CardBody>
                <CardTitle>
                  <h4>{showCity.city_name}</h4>
                </CardTitle>
                <CardSubtitle>
                  <h4>{showCity.country_name}</h4>
                  <br />
                  <h3>{weather[0].temperature} &#176;</h3>
                  <br />
                  <strong>Last Updated: </strong>
                  <br />
                  <p>{weather[0].date}</p>
                  <h5>{weather[0].time}</h5>
                  <br />
                  <strong>Weather: </strong>
                  {weather[0].current_weather}
                  <img src={weather[0].icon} />
                  <br />
                  <strong>UV Index: </strong>
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
                  <Button>Back</Button>
                </NavLink>
              </CardBody>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default CityShow;
