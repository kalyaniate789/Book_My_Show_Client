import React, {useEffect} from "react";

//this component rendering selected movie section
const SelectMovie = ({
  movies,
  selectedMovie,

  setSelectedMovie,
}) => {
  useEffect(() => {
    const lsMovie = localStorage.getItem("persistMovie");
    if (lsMovie) {
      setSelectedMovie(lsMovie);
    }
  }, []);

  return (
    <div className="movie-row">
      <h3 className="Slots">Select A Movie</h3>
      {movies.map((movie, i) => (
        <div
          key={i}
          className={`movie-column ${
            movie == selectedMovie ? "movie-column-selected" : ""
          }`}
          onClick={() => {
            setSelectedMovie(movie);
            localStorage.setItem("persistMovie", movie);
          }}
        >
          {movie}
        </div>
      ))}
    </div>
  );
};

export default SelectMovie;
