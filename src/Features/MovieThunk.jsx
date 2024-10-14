import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";






export const homeMovieDetails = createAsyncThunk(
  'homemovie/fetch',
  async(imdbID)=>{
    try {
      const response =await axios.get("http://www.omdbapi.com/?s=Billa&type=movie&apikey=257ee551");
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
)




export const moviesSerarchList = createAsyncThunk(
    'movie/fetch',
    async (searchQuery) => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=257ee551`);
        return response.data;
      } catch (error) {
        // Handle error, and return a rejected action if necessary
        return console.log(error);
        ;
      }
    }
  );

  export const selectMovieDetails = createAsyncThunk(
    'movieDetails/fetch',
    async(imdbID)=>{
      try {
        const response =await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=257ee551`);
        return response.data;
      } catch (error) {
        return console.log(error);
      }
    }
  )
 



