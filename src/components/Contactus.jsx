import React from "react";
import imageSrc from "../6.jpeg";
function Contactus() {
  return (
    <>
      <section id="contact" style={{ backgroundColor: "#080808" }}>
        <div className="contact-container container">
          <div className="contact-img">
            <img src={imageSrc} alt="" />
          </div>

          <div className="form-container">
            <h2 style={{ fontSize: "4rem" }}>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols="30"
              rows="6"
              placeholder="Type Your Message"
            ></textarea>
            <a
              href="/src/pages/Homepage.jsx"
              target="__blank"
              className="btn btn-primary"
            >
              Submit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contactus;
