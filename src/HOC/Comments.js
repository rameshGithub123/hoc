import React from "react";
import HOC from "./HOC";

const Comments = ({ countNumber, handleClick }) => {
  return (
    <div>
      <span>{countNumber}</span>
      <button onClick={handleClick}>Comments</button>
    </div>
  );
};

export default HOC(Comments);
