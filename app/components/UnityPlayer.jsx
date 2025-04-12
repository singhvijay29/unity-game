import React from "react";

const UnityPlayer = ({ gamePath }) => {
  return (
    <div className="unity-container">
      <iframe
        src={gamePath}
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default UnityPlayer;
