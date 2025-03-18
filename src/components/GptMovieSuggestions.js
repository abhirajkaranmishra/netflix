import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const{movieResults,movieNames}=useSelector((store)=>store.gpt);
  if(!movieNames)
    return null;

  const clearcart = ()=>{
      
  }

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <button className="bg-red-600 text-white rounded-lg m-4 px-4 py-2" onClick={clearcart}>clear</button>
      <div>
        {movieNames.map((movieName,index)=>(<MovieList
        key={movieName}
        title={movieName}
        movies={movieResults[index]}/>))}
        
      </div>
    </div>
  );
};

export default GptMovieSuggestions;