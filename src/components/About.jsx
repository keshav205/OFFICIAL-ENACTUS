import React from "react";
import team_img from "../asset/team.jpeg";
function about() {
  return (
    <>
      <section id="about">
        <div className="about-wrapper container">
          <div className="about-text">
            <h2 className="small" style={{ color: "#ffb300" }}>
              About Us
            </h2>

            <p style={{ color: "black" }}>
              ENACTUS is an international non-profit organization in 39
              countries around the world and has over 70,000 students as active
              members . Enactus motivates students to use entrepreneurship to
              enhance lives. They harness business,innovation and
              entrepreneurial actions to tackle vital global issues, providing
              diverse perspectives and empowering individuals for better
              livelihood. Enactus usually collaborates on initiatives that
              tackle environmental, social, and economic issues.
            </p>
          </div>
          <div className="about-img">
            <img src={team_img} alt="TEAM" />
          </div>
        </div>
      </section>

      <section style={{ padding: "10px", paddingTop: "20px" }}></section>
    </>
  );
}

export default about;
