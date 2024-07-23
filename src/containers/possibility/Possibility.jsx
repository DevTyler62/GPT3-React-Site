import React from "react";
import "./possibility.css";

import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request ealry Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilites are beyond your imagination
        </h1>
        <p>
          Yet bed any for traveling assistance indulgence unpleasing not
          thoughts all exercise blessing. Indulgence way everything joy
          allertation beyond the attachment. Party we years to order allow asked
          of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;