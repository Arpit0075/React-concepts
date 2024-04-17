import React, { useState } from "react";
import { users } from "./array";

function Pagination() {
  const [ItemsPerPage, setItemsPerPage] = useState(2);
  const [curentPage, setCurrentPage] = useState(1);

  let totalPages = Math.ceil(users.length / ItemsPerPage);
  let indexLastItem = ItemsPerPage * curentPage; //2
  let indexFirstItem = indexLastItem - ItemsPerPage; //0

  const pages = [...Array(totalPages + 1).keys()].slice(1);
  let usersArr = users.slice(indexFirstItem, indexLastItem);

  const styles = {
    buttonStyle: {
      padding: "0.5rem",
      margin: "0.5rem",
      cursor: "pointer",
    },
    active: {
      background: "blue",
      cursor: "pointer",
      padding: "0.5rem",
      margin: "0.5rem",
    },
  };

  const handlePrevious = () => {
    if (curentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (curentPage !== pages.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleSelect = (e) => {
    setItemsPerPage(e.target.value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <select value={ItemsPerPage} onChange={handleSelect}>
        <option value={2}> 2</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
      </select>
      <br />

      <button onClick={handlePrevious}>Previous</button>
      {usersArr?.map((user, index) => {
        return (
          <span key={index} style={{ margin: "1rem" }}>
            {user.name}
            {user.age}
          </span>
        );
      })}
      <button onClick={handleNext}>Next</button>
      <br />
      {pages?.map((page, index) => (
        <button
          style={curentPage === page ? styles.active : styles.buttonStyle}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
