import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  return (
    <div>

      <div className="">
        <Header/>
      </div>
      <div className="">
        {showGptSearch?(<GptSearch/>):(<><MainContainer/>
          <SecondaryContainer/></>)}
      </div>
    </div>
  )
}

export default Browse;