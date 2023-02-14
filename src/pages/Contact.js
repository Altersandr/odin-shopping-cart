import React from "react";
import facebook from "../img/icons/facebook.png";
import instagram from "../img/icons/instagram.png";
import twitter from "../img/icons/twitter.png";
import github from "../img/icons/github.png";

export default function Contact() {
  return (
    <div id="contact">
      <div id="contact-images">
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
        <a href="https://github.com/Altersandr">
          <img src={github}></img>
        </a>
      </div>
      <div>
        <h1>Contact us via one of the above platforms</h1>

        <h1>Thank you for shopping!</h1>
      </div>
    </div>
  );
}
