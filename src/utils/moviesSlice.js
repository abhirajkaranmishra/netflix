import { createSlice } from "@reduxjs/toolkit";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const moviesSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    trailerVideo:null,
    PopularMovies:null,
    UpcomingMovies:null,
    TopRatedMovies:null,
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.PopularMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.UpcomingMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
      state.TopRatedMovies=action.payload;
    },
  },
});

export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;