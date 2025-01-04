import React from "react";

function Home({ children }) {
  //This is a higher order component that receives child component as props and can display them
  console.log(children);

  return (
    <div>
      Home
      {children[0]}
      {children[1]}
    </div>
  );
}

export default Home;
