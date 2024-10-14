import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import MovieCards from './Components/MoviesCards/MovieCards'
import MovieDetails from './Pages/MovieDetails'
import Footer from './Components/Footer/Footer'



function App() {

 

  return (
  
    <div>
     
      
    <BrowserRouter>
    <Navbar /> 
       {/* <MovieCards/>    */}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movies/:imdbID" element={<MovieDetails/>}/>
    {/* <Route path="about" element={<MovieDetails/>}/> */}

   </Routes>
   <Footer/>
   </BrowserRouter>

    </div>
  
   
        
  
  )
}

export default App
