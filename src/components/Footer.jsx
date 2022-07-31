import React from "react";
import twitter from "../assets/TwitterIcon.png"
import facebook from "../assets/FacebookIcon.png"
import instagram from "../assets/InstagramIcon.png"
import github from "../assets/GitHubIcon.png"

export default function Footer(){

    return (
        <div className="footer-container">
            <img className="twitter" src={twitter} alt="twitter"></img>
            <img className="facebook" src={facebook} alt="facebook"></img>
            <img className="instagram" src={instagram} alt="instagram"></img>
            <img className="github" src={github} alt="github"></img>
        </div>
    )
}