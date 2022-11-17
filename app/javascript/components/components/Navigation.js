import React from "react";


const Navigation = ({
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
}) => {
    return (

        <nav className="navbar navbar-expand-lg d-flex " style={{ backgroundColor: "#000000", marginBottom: "0" }} >
            <a className="navbar-brand " href="/">LOGO
                
            </a>
            <div className="container-fluid justify-content-end">

                <ul className="nav justify-content-end" style={{ paddingBottom: "20px", paddingRight: "20px", fontWeight: "450" }}>
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/cityindex">All Cities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/aboutus">About Us</a>
                    </li>

                    {/* Show when LOGGED IN */}

                    {logged_in && (
                        <>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/protectedcityindex">My Cities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/citynew">Add New City</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href={sign_out_route}>Sign Out</a>
                            </li>
                        </>
                    )}

                    {/* only show if NOT logged in */}

                    {!logged_in && (
                        <>
                        <li className="nav-item">
                                <a className="nav-link text-white" href={sign_in_route}>Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href={new_user_route}>Sign Up</a>
                            </li>
                        
                        </>
                    )}

                </ul>
            </div>
        </nav>


    )
}

export default Navigation