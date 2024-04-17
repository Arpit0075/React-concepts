import React from "react";
import PropTypes from "prop-types";

function FriendList({ name }) {
  return (
    <div>
      <h1>Freinds</h1>
      {name}
    </div>
  );
}

FriendList.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  //country:PropTypes.string.isRequired
};

FriendList.defaultProps = {
  name: "Rahul",
  // address: "armenia",
};

export default FriendList;
