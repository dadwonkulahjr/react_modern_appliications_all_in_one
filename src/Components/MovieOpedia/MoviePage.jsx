import { useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {
  const [movieState, setMovieState] = useState(() => {
    return {
      movieList: ["Die hard", "Harry Portter", "Behind Enemy Alines"],
    };
  });

  const handleAddMovie = (newMovie) => {
    alert("Form submitted!");
    setMovieState((prevState) => {
      return { ...prevState, movieList: prevState.movieList.concat(newMovie) };
    });
  };

  return (
    <div className="container border my-3 col-12 col-md-6">
      <AddMovie handleAddMovie={handleAddMovie} />
      <MovieList movieList={movieState.movieList} />
    </div>
  );
};

export default MoviePage;
