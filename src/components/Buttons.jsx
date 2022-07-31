import React from "react";
import buttonEmail from "../assets/buttonEmail.png"
import buttonLinkedin from "../assets/buttonLinkedin.png"

export default function Buttons(){

    return (
        <div className="btn-container">
            <a href="mailto:fahdkassim@gmail.com"><img className="btn-email" src={buttonEmail}/></a>
            <a href="https://www.linkedin.com/in/fahd-hassaan-963112100/overlay/contact-info/"><img className="btn-linkedin" src={buttonLinkedin}/></a>
        </div>
    )
}