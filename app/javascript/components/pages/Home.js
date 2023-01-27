import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";

const Home = ({ new_user_route, sign_in_route, logged_in, current_user }) => {
  const navigate = useNavigate();
  const handleSubmit = (id) => {
    if (id === "index") {
      navigate("/cityindex");
    } else {
      navigate("/protectedcityindex");
    }
  };

  return (
    <>
      <div className="main">
        <div class="overlay"></div>
        <video
          src="https://player.vimeo.com/external/449965919.sd.mp4?s=bddb4505e519bdb75b8f87611ea524000023c858&profile_id=139&oauth2_token_id=57447761"
          autoPlay
          loop
          muted
          id="video"
        ></video>

        {/* Show when LOGGED IN */}
        {logged_in && (
          <div className="container-fluid content">
            <div className="col-7">
              <h1 class="title"> CLOUDY WEATHER APP</h1>
              <h3 class="mb-3"> Welcome {current_user.username}!</h3>

              <button
                class="btn btn-outline-secondary col-3 col-3 m-3 border border-white btn-home"
                onClick={() => handleSubmit("user-index")}
                name="submit"
              >
                MY PLACES
              </button>
              <button
                class="btn btn-outline-secondary col-3  col-3 m-3 border border-white"
                onClick={() => handleSubmit("index")}
                name="submit"
              >
                POPULAR CITIES
              </button>
            </div>
          </div>
        )}

        {/* Show when LOGGED OUT */}
        {!logged_in && (
          <div className="container-fluid content">
            <div class="col-8">
              <h1 class="m-3">
              ALWAYS BE ON TOP OF THE WEATHER</h1>

              <button class="btn btn-outline-secondary col-3  col-3 m-3 btn-lg btn-home">
                <a href={sign_in_route} className="nav-link">
                  SIGN IN
                </a>
              </button>
              <button class="btn btn-outline-secondary col-3 m-3 btn-lg ">
                <a href={new_user_route} className="nav-link">
                  SIGN UP
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
