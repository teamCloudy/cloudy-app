import React, { useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CityEdit = ({ cities, weathers, current_user, editNotes }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentCity = cities?.find((city) => city.id === +id);
  // const getWeather = Math.ceil(Math.random() * (weathers.length - 1)) + 1;
  const [updateNotes, setUpdateNotes] = useState({
    user_id: current_user.id,
    weather_id: currentCity.weather_id,
    city_name: currentCity?.city_name,
    country_name: currentCity?.country_name,
    notes: currentCity?.notes,
    private: true,
  });

  const handleChange = (e) => {
    setUpdateNotes({ ...updateNotes, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    editNotes(updateNotes, currentCity.id);
    navigate("/protectedcityindex");
  };
  return (
    <>
    <div class="show-main">
      <div class="bg-image show-city-edit-bg">
        <div class="mask-popular-cities-edit">
        <main className="show-city-cards">
      <div className="add-city-form">
        <div className="form-card">
          <Form>
            <h3 className="notes-city-title">
              {currentCity?.city_name}
              </h3>
             <h4 className="notes-country-title">{currentCity?.country_name}
             </h4> 
            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                defaultValue={currentCity?.note}
                type="text"
                name="notes"
                id="notes"
                onChange={handleChange}
                required
              />
            </FormGroup>
            <div className="center-flex">
              <Button onClick={handleSubmit} name="submit">
                {" "}
                UPDATE NOTES
              </Button>
              <br />
              <NavLink to="/protectedcityindex" className="nav-link">
                <Button>BACK</Button>
              </NavLink>
            </div>
          </Form>
        </div>
      </div>
      </main>
      </div>
      </div>
      </div>
    </>
  );
};

export default CityEdit;
