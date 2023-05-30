import React from "react";

// Scroll is a wrap component
// Scroll can use CardList as its Children
// Make a Scroll componet with props.children
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        // border: "1px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
