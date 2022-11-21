import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap"

const ProtectedUserIndex = ({ cities, weathers, logged_in, current_user }) => {
    console.log(cities ,"LOOK OVER HEREEEEEEEE", weathers)
    return (
        <>
        <div>
            <h3 className="centerTitle"> My Cities</h3>
            {logged_in && (
                    <div className="centerCard">
                        {cities?.map((city, index) => {
                            console.log(city);
                            let weather = weathers?.filter(
                                (weather) => city.weather_id === weather.id
                            );
                            console.log(weather);
                            return (
                                <div key={index}>
                                    {current_user.id === cities[index].id && (
                                            <Card style={{ width: "210px", height: "210px" }} key={index}>
                                                <CardBody>
                                                    <CardTitle key={index}>{city.city_name}</CardTitle>
                                                    {/* <CardSubtitle>
                                                        {city.country_name}
                                                        <br />
                                                        {weather[0].temperature}
                                                        <br />
                                                        {weather[0].time}
                                                        <br />
                                                        {weather[0].date}
                                                    </CardSubtitle> */}
                                                    <Button> See More Details</Button>
                                                </CardBody>
                                            </Card>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                
            )}

            {!logged_in && <h1> Please Log In</h1>}
        </div>
        </>
    )
}

export default ProtectedUserIndex
