import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.UpcomingMovies && movies.nowPlayingMovies&& movies.PopularMovies&& (<div className="bg-black">
    <div className="-mt-52 pl-12 relative z-20">
      <MovieList title= {"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title= {"Upcoming Moovies"} movies={movies.UpcomingMovies}/>
      <MovieList title= {"Popular Movies"} movies={movies.PopularMovies}/>
      <MovieList title= {"TopRated Movies"} movies={movies.TopRatedMovies}/>
    </div>
    </div>)
  )
}

export default SecondaryContainer;