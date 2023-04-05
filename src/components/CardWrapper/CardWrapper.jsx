import React from "react";

const Card = ({ children }) => {
  return (
    <div className="Card">
      <div className="Content">{children}</div>
    </div>
  );
};

export default Card;
