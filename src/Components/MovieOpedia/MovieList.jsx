const MovieList = (props) => {
  return (
    <div className="text-white">
      {console.log("Movie Test Data\n----------------------------")}

      {props.movieList.map((movie, index) => {
        return (
          <div className="text-center" key={movie}>
            {movie} - {index}
            {console.log(movie, index)}
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
