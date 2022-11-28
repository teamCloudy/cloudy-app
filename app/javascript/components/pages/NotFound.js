import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams, NavLink } from "react-router-dom";
import {  Button } from "reactstrap";

const NotFound = ({ new_user_route, sign_in_route, logged_in, current_user }) => {
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
                <div class="overlay overlay-notfound-video"></div>
                <video className="notfound-video"
                    src="https://player.vimeo.com/external/450669763.sd.mp4?s=1bc6e23ae7b28bc917203fc0ed396b9028025c23&profile_id=139&oauth2_token_id=57447761"
                    autoPlay
                    loop
                    muted
                    id="video"
                ></video>
                
                 {/* Show when LOGGED IN */}
    

        {/* Show when LOGGED OUT */}
        {!logged_in && (
          <div className="container-fluid content">
            <div class="col-8">
              <h1 class="m-3 title"> PAGE NOT FOUND</h1>
              

              <button class="btn btn-outline-secondary col-3  col-3 m-3 btn-lg btn-home btn-notfound">
                <a href="/" className="nav-link">
                  HOME
                </a>
              </button>
              <button class="btn btn-outline-secondary col-3 m-3 btn-lg btn-home btn-notfound">
                <a href="/cityindex" className="nav-link">
                 POPULAR CITIES
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotFound