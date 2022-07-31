import React from "react";
import buttonEmail from "../assets/buttonEmail.png"
import buttonLinkedin from "../assets/buttonLinkedin.png"

export default function Buttons(){

    return (
        <div className="btn-container">
            <img className="btn-email" src={buttonEmail}/>
            <img className="btn-linkedin" src={buttonLinkedin}/>
        </div>
    )
}