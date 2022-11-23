import React from "react";
import { useParams, useNavigate, NavLink} from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const ProtectedCityShow = ({ cities, weathers, current_user }) => {
  const { id } = useParams();
  let weather = weathers;
  const showCity = cities?.find((city) => city.id === +id);

  const handleClick = () => {
    if (current_user.id !== showCity.user_id) {
      alert(
        "YOu cannot delete another Cloudy user's location that doesn't belong to you!"
      );
    } else if (current_user.id === showCity.user_id) {
      const confirmDelete = confirm(
        "Are you sure you want to delete this location? This cannot be undone."
      );
      if (confirmDelete) {
        deleteCity(showCity.id);
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
                    <br />
                    {showCity.notes}
                  </CardSubtitle>
                  <Button>
                    <NavLink to={`/cityedit/${showCity.id}`}>
                      Edit Notes
                    </NavLink>
                  </Button>
                  <Button onClick={handleClick}>Delete Location</Button>
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
