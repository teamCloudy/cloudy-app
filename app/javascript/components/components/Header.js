import React from "react";
import Navigation from "./Navigation";

const Header =  (props) => {
    return (
        <>
        <h3> Header</h3>
            <Navigation {...props}/>
        </>
    )
}

export default Header