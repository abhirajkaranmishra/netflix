import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer =(movieId)=>{
  const dispatch = useDispatch();
  const getMoviesVideos = async()=>{
    const data = await fetch ("https://api.themoviedb.org/3/movie/"+movieId+"/videos",API_OPTIONS);
    const json = await data.json();
    //console.log(json);
    const filterData = json.results.filter((video)=>video.type==="Trailer");
    const trailer = filterData.length?filterData[0]:json.result[0];
   // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    getMoviesVideos();
  },[]);
};

export default useMovieTrailer;