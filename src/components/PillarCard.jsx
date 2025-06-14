import React from "react";
import "../styles/PillarCard.scss";

const PillarCard = ({ icon, badgeIcon, stat, title, description }) => {
  return (
    <div className="pillar-card">
      <div className="image-wrapper">
        <img src={icon} alt={title} />
      </div>
      <div className="content">
        <div className="stat-badge">
          <img src={badgeIcon} alt="" className="stat-icon" />
          <span className="stat-text">{stat}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PillarCard;