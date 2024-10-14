import {createSlice } from '@reduxjs/toolkit'
import {  moviesSerarchList ,selectMovieDetails } from './MovieThunk';





const initialState ={
    movieList:[],
    serachQuery:'',
    movieDetails:[],
   
   
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
        
    }

})

 export const {handlebtnclick} = MovieSlice.actions;

export default MovieSlice.reducer;
