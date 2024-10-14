import { configureStore} from "@reduxjs/toolkit";
import MovieSlice from '../Features/MovieSlice'



export const store = configureStore({
    reducer:{
        movies:MovieSlice,
    }
})