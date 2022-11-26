import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const ProtectedCityShow = ({ cities, weathers, current_user, deleteCity }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let weather = weathers;
  const showCity = cities?.find((city) => city.id === +id);

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
                    <img src={weather[0].icon} />
                    <br />
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
                  <Button>
                    <NavLink to={`/cityedit/${showCity.id}`}>
                      Edit Notes
                    </NavLink>
                  </Button>
                  <Button onClick={handleClick}>Delete Location</Button>
                  <NavLink to="/protectedcityindex" className="nav-link">
                    <Button>Back</Button>
                  </NavLink>
                </CardBody>
              </Card>
            </div>
          )}
        </div>
      </>
    );
  }
};

export default ProtectedCityShow;
