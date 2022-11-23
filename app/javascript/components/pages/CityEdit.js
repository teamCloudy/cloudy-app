import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const CityEdit =  ({ cities, weathers, current_user, editNotes}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const currentCity = cities?.find((city) => city.id === +id)
    const getWeather = Math.floor(Math.random() * weathers.length)
    const [updateNotes, setUpdateNotes] = useState({
        user_id: current_user.id,
        weather_id: getWeather,
        city_name: currentCity?.city_name,
        country_name: currentCity?.country_name,
        notes: currentCity?.notes,
        private: true,
    })

    const handleChange = (e) => {
        setUpdateNotes({ ...updateNotes, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        editNotes(updateNotes, currentCity.id)
        navigate("/protectedcityindex")
    }


return (
    <>
     <div className="form">
        <div className="form-card">
            <Form>
                <div>
                    {currentCity?.city_name}
                    <br />
                    {currentCity?.country_name}
                </div>
                <FormGroup>
                    <Label for="notes">Notes</Label>
                    <Input 
                    defaultValue={currentCity?.note}
                    type="text"
                    name="notes"
                    id="notes"
                    onChange={handleChange}
                    required />
                </FormGroup>
                <div className="center-flex">
                    <Button onClick={handleSubmit} name="submit"> Update Notes
                    </Button>
                </div>
            </Form>
        </div>
     </div>
    </>
  );
};

export default CityEdit