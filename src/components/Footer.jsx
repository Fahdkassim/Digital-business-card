import React from "react";
import twitter from "../assets/TwitterIcon.png"
import facebook from "../assets/FacebookIcon.png"
import instagram from "../assets/InstagramIcon.png"
import github from "../assets/GitHubIcon.png"

export default function Footer(){

    return (
        <div className="footer-container">
            <a href="https://twitter.com/fahdkassim"><img className="twitter" src={twitter} alt="twitter"></img></a>
            <a href="https://www.facebook.com/fahd.kassim"><img className="facebook" src={facebook} alt="facebook"></img></a>
            <a href="https://www.instagram.com/fahdkassim/"><img className="instagram" src={instagram} alt="instagram"></img></a>
            <a href="https://github.com/Fahdkassim"><img className="github" src={github} alt="github"></img></a>
        </div>
    )
}