import React, { useState } from "react";

const FloatButton = ({ title, statusColor, content, positionX, positionY }) => {
    const [active, setActive] = useState(false);

  const handleHover = () => {
    setActive(true);
  };

  const handleLeave = () => {
    setActive(false);
  };
  return (
    <div className="float-btn-container" style={{ position: "absolute", left: positionX, top: positionY }}>
        <div className={`float-btn ${active ? 'collapse' : ''}`} onMouseEnter={handleHover}
        onMouseLeave={handleLeave}>
        <div className="basic-content">
            <div className="circle" style={{ backgroundColor: statusColor, color: statusColor, borderRadius: "100%" }}>
            <div className="cir1">
                <div className="cir-inner"></div>
            </div>
            </div>
            <div className="text-container">
            <span className="title-float">{title}</span>
            </div>
        </div>
        {active && 
            <div className="state-content">
            <h4>Status :</h4>
            <span className="state">
                    {/* <span className="statusColor" style={{ backgroundColor: statusColor, color: statusColor }}>s</span> */}
                    {content}
                    </span>
                </div>
        }

        </div>
    </div>
  );
};

export default FloatButton;
