import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from "reactstrap";

const ProtectedCityShow = ({ cities, weathers, current_user, deleteCity }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const showCity = cities?.find((city) => city.id === +id);
  let weather = weathers?.filter(
    (weather) => showCity.weather_id === weather.id
  );

  const handleClick = () => {
    if (current_user.id !== showCity.user_id) {
      alert(
        "You cannot delete another Cloudy user's location that doesn't belong to you!"
      );
    } else if (current_user.id === showCity.user_id) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this location? This cannot be undone."
      );
      if (confirmDelete) {
        deleteCity(showCity.id);
        navigate("/protectedcityindex");
      } else if (!confirmDelete) {
        console.log("Delete cancelled.");
      }
    }
  };

  if (current_user.id !== showCity.user_id) {
    return (
      <h4>
        This page cannot be rendered because you are not the owner of this
        location.
      </h4>
    );
  } else if (current_user.id === showCity.user_id) {
    return (
      <>
     
        <div class="bg-image show-my-city-bg ">
        <div class="mask-my-show">
          <h1 className="popular-cities-title"> MORE DETAILS</h1>
          <main className="show-my-city-cards">

          {showCity && (
            <Row>
              <Col sm="4">
              <Card className="card-my-city-show card-my-city-show-bg-image">
                    <div class="mask-card-my-city-show">
                <CardBody>
                  <CardTitle>
                    <h4>{showCity.city_name}</h4>
                  </CardTitle>
                  <CardSubtitle>
                    <h6>{showCity.country_name}</h6>
                    <br />
                    <img src={weather[0].icon} />
                    <h3>{weather[0].temperature} &#176;</h3>
                    <br />
                    <strong>Last Updated: </strong>
                    <br />
                    <p>{weather[0].date}</p>
                    <h5>{weather[0].time}</h5>
                    <br />
                    <hr className="my-4 separate-show" />
                    <strong>Weather: </strong>
                    {weather[0].current_weather}
                    <br />
                    <strong>UV Index: </strong>
                    {weather[0].uv_index}
                    <br />
                    <strong>Wind Speed: </strong>
                    {weather[0].wind_speed} mph
                    <br />
                    <strong>Humidity: </strong>
                    {weather[0].humidity}%
                    <br />
                    <strong>Description: </strong>
                    <br />
                    {weather[0].description}
                    <br />
                    <strong>Location Notes: </strong>
                    <br />
                    {showCity.notes}
                  </CardSubtitle>
                  <div className="display-flex-buttons">
                  
                    <button class="btn btn-outline-secondary col-5 col-3 m-3 btn-lg">
                    <NavLink to={`/cityedit/${showCity.id}`} className="nav-link">
                      EDIT NOTES
                      </NavLink>
                      </button>
                
                  <button class="btn btn-outline-secondary col-5  col-3 m-3 btn-lg" onClick={handleClick}>DELETE LOCATION </button>
                  </div>
                  <div className="back-btn-protected-show">
                    
                  <button class="btn btn-outline-secondary col-11  col-3 m-3 btn-lg">
                  <a href="/protectedcityindex" className="nav-link">
                   BACK
                    </a>
                    </button>
                
                  </div>
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
  }
};

export default ProtectedCityShow;
