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
                <CardTitle>{showCity.city_name}</CardTitle>
                <CardSubtitle>
                  {showCity.country_name}
                  <br />
                  {weather[0].temperature}
                  <br />
                  {weather[0].time}
                  <br />
                  {weather[0].date}
                  <br />
                  {weather[0].current_weather}
                  <br />
                  {weather[0].uv_index}
                  <br />
                  {weather[0].wind_speed}
                  <br />
                  {weather[0].humidity}
                  <br />
                  {weather[0].description}
                  <br />
                  {weather[0].icon}
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
