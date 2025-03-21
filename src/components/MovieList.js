import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    if(!title || !movies)
      return null;
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        
        <div className="flex">
          {movies.map(movie=><MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;