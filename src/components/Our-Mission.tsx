import React from "react";
import "./Our-Mission.css";

const OurMission: React.FC = () => {
  return (
    <div className="our-mission-container">
      <div className="our-mission-main">
        <div className="our-mission-left">
          <h1 className="our-mission-title">Who Are We</h1>
        </div>
        <div className="our-mission-right">
          <p className="our-mission-text">
            This community was created to inspire and provide support to underrepresented pre-med students in medicine.<br /><br />
            Our mission is to inspire and guide you on your journey towards achieving your medical aspirations. Our platform showcases insightful interviews with physicians and medical students. We want you to understand that your dream of becoming a doctor is not only possible but also within reach.<br /><br />
            The road to becoming a doctor is different for everyone and can sometimes feel lonely. We hope that by reading these stories, we can keep your passion burning and give you the additional strength to continue this journey of becoming a great physician. We are all in this together and you are not alone.<br /><br />
            The world needs you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
