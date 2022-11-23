import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonToolbar } from "reactstrap";

const Home =  ({new_user_route, sign_in_route, logged_in}) => {
    const navigate = useNavigate()
    const handleSubmit = (id) => {
        if (id === "index") {
            navigate("/cityindex")
        } else {
            navigate("/protectedcityindex")
        }
    }



    return (
        <>
        <h3> Cloudy Weather App</h3>

        {/* Show when LOGGED IN */}
        {logged_in && (
            <div>
                <h4> WELCOME USER!!</h4>
                <p>This is our app called CLOUDY. We are your personal weather app, to help you keep tabs of your favorite locations in the world. Whether you have friends and family all over the world, or you travel often, our app will help you stay informed 24/7. So what makes us different from our competitors? You can enjoy our app, ad free, we won't sell your personal data to advertisers. All of your locations will be private to your account. Your personal data is secured on our website.</p>
                <button onClick={() => handleSubmit("user-index")} >My cities</button>
                <button onClick={() => handleSubmit("CityIndex")}>All Cities</button>
            </div>
        )}
        

        {/* Show when LOGGED OUT */}
        {!logged_in && (
            <div>
                <p> ALWAYS BE ON TOP OF THE WEATHER</p>

                <button>
                    <a href={sign_in_route} className="nav-link">
                    Sign In
                    </a>
                </button>
                <button>
                    <a href={new_user_route} className="nav-link">
                        Sign Up
                    </a>
                </button>
            </div>
        )}


        </>
    )
}

export default Home