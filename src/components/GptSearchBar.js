import { useRef } from "react";
import { GEMNI_AI } from "../utils/constant";
import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async(movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    const query = "Act as a movie recommendation system and suggest some movies from the query"+ searchText.current.value +". Only give me names of 5 movies, comma-separated, like the example result given ahead. Example Result: Gadar, Don, Sholay, Golmaal, Koi Mil Gaya";
    console.log("loading....");
   const respounse = await axios({
  url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAM6IY8B_NHZHrtbZK6mXUI-QFdgHPHavA",
  method:"post",
  data:{
    contents:[
      {parts:[{text:query}]},
    ],
  },
})
console.log(respounse['data']['candidates'][0]['content']['parts'][0]['text']);
const GemniSuggestion = respounse['data']['candidates'][0]['content']['parts'][0]['text'].split(",");
const PromiseArray=GemniSuggestion.map(movies=>searchMovieTmdb(movies));
const tmdbResult= await Promise.all(PromiseArray);
dispatch(addGptMovieResult({movieResults:tmdbResult,
  movieNames:GemniSuggestion
}));
};

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
         type="text"
         className="p-4 m-4 col-span-9" 
         ref ={searchText}
         placeholder="What would you like to watch today?"/>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:cursor" onClick={handleGptSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar;