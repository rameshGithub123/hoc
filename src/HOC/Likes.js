import React from "react";
import HOC from "./HOC";

const Likes = (props) => {
  return (
    <div>
      <span>{props.countNumber}</span>
      <button onClick={props.handleClick}>Likes</button>
    </div>
  );
};
const EnhancedLikes = HOC(Likes);
export default EnhancedLikes;
