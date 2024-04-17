import React, { memo } from "react";

function Input({ handleChange, value, input }) {
  console.log("Input rendered");
  return (
    <div>
      {value}
      <input
        type="text"
        value={input}
        placeholder="enter something here"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default memo(Input);
