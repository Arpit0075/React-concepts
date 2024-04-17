// recursion in react
import React, { useState } from "react";

function Family({ familyTree }) {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ paddleLeft: "20px" }}>
      <span onClick={expand}>{familyTree.name}</span>
      {isVisible
        ? familyTree?.children?.map((child, index) => {
            return (
              <div style={{ paddleLeft: "10px" }} key={index}>
                <Family familyTree={child} />{" "}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Family;
