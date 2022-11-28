import React from "react";
import logo from "../../../assets/images/cloudy.svg";
import { Button } from "reactstrap";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#000000", marginBottom: "0", zIndex: "1" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img className="logo" src={logo} alt="logo of cloudy app" />
        </a>
        <div className="container-fluid justify-content-end">
          <ul className="nav justify-content-end navigation">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/cityindex">
                Popular Cities
              </a>
            </li>

            {/* Show when LOGGED IN */}

            {logged_in && (
              <>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/protectedcityindex">
                    My Places
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/citynew">
                    Add New Location
                  </a>
                </li>

                <li className="nav-item sign-in-up">
                  <Button>
                    <a className="nav-link text-white" href={sign_out_route}>
                      Sign Out
                    </a>
                  </Button>
                </li>
              </>
            )}

            {/* only show if NOT logged in */}

            {!logged_in && (
              <>
                <li className="nav-item sign-in-up">
                  <Button>
                    <a className="nav-link text-white" href={sign_in_route}>
                      Sign In
                    </a>
                  </Button>
                </li>
                <li className="nav-item">
                  <Button>
                    <a className="nav-link text-white" href={new_user_route}>
                      Sign Up
                    </a>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
