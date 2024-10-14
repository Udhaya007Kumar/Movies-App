import {createSlice } from '@reduxjs/toolkit'
import {  homeMovieDetails, moviesSerarchList ,selectMovieDetails } from './MovieThunk';
import { useEffect } from 'react';




const initialState ={
    movieList:[],
    serachQuery:'',
    movieDetails:[],
    homeMovies:[],
   
   
}
 
  

 
const MovieSlice =createSlice({
    name:'movie',
    initialState,
    reducers:{
        
        handlebtnclick:(state,action)=>{
            state.serachQuery =action.payload
   
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(moviesSerarchList.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.movieList = action.payload.Search;
        })
        .addCase(selectMovieDetails.fulfilled,(state,action)=>{
            //state.status = 'succeeded';
            state.movieDetails=action.payload
            
        })
        .addCase(homeMovieDetails.fulfilled,(state,action)=>{
            state.homeMovies =action.payload.Search
        })
        
    }

})

 export const {handlebtnclick} = MovieSlice.actions;

export default MovieSlice.reducer;
