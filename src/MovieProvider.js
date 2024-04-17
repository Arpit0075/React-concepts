// context
import React, { createContext, useContext } from "react";

export const MovieContext = createContext();

function MovieProvider({ children }) {
  let movies = ["Matrix", "Fight Club"];
  let actors = ["Brian", "Keanu"];

  return (
    <div>
      <MovieContext.Provider value={{ movies: movies, actors: actors }}>
        {children}
      </MovieContext.Provider>
    </div>
  );
}
export default MovieProvider;

//custom hook to get movies context value
export const useMovieContext = () => {
  return useContext(MovieContext);
};
