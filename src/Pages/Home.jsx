import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeMovieDetails, moviesSerarchList } from '../Features/MovieThunk';
import { Link } from 'react-router-dom';


const Home = () => {
    
    const serachQuery  =useSelector((state)=>state.movies.serachQuery)
    const movies = useSelector((state)=>state.movies.movieList);
    const homemovies =useSelector((state)=>state.movies.homeMovies);
    const dispatch = useDispatch();
  
  
    useEffect(()=>{
      if(serachQuery){
        dispatch(moviesSerarchList(serachQuery))
      }  
    },[serachQuery,dispatch])


    
         useEffect(() => {
          dispatch(homeMovieDetails())
         }, []);

  
         console.log(homemovies);
         

    
    
    
 
     if(!movies || movies.length===0){
      return(
        <div className=' bg-slate-600 '>
              <div className="bg-[#CB80AB]">
          <div className=" container mx-auto grid grid-row pt-12  lg:p-[150px] lg:flex gap-4 flex-wrap">
            { homemovies.map((ele, index) => {
              return (
                <div key={index} className="bg-white m-5 p-2 ml-[60px] lg:ml-0 rounded-xl w-[250px] lg:w-[250px] hover:shadow-xl hover:shadow-black">
                  <div className="h-1/12 bg-slate-800 rounded-3xl">
                  <Link to={`/movies/${ele.imdbID}`}>
                    <img
                      className=" rounded-3xl w-[250px] h-[350px] lg:w-[250px] "
                      src={ele.Poster}
                      alt= {ele.Title}
                    />
                     </Link>
                  </div>
                  <div className="h-5/12 flex flex-wrap">
                    <h5 className="mt-3 text-2xl font-serif text-start lg:text-xl wrap">
                      {ele.Title}
                    </h5>
                   
                  </div>
                  <div className=' h-6/12 flex items-end  '>
                  <h6 className="m-2 ml-5 text-xl font-serif mt-4 ">
                      {ele.Year}
                    </h6>
                    <span className="mt-2 ml-4 ">
                      <button  className="px-7 py-2 bg-indigo-700 rounded-3xl text-white hover:bg-indigo-500">
                        View
                      </button>
                    </span>
                  </div>
                 
                </div>
              );
            })}
          </div> 
        </div>   
           
        </div>
      )
     }

    return (
        <div>
               <div className="bg-[#CB80AB]">
          <div className=" container mx-auto grid grid-row pt-12  lg:p-[150px] lg:flex gap-4 flex-wrap">
            {movies.map((ele, index) => {
              return (
                <div key={index} className="bg-white m-5 p-2 ml-[60px] lg:ml-0 rounded-xl w-[250px] lg:w-[250px] hover:shadow-xl hover:shadow-black">
                  <div className="h-1/12 bg-slate-800 rounded-3xl">
                  <Link to={`/movies/${ele.imdbID}`}>
                    <img
                      className=" rounded-3xl w-[250px] h-[350px] lg:w-[250px] "
                      src={ele.Poster}
                      alt= {ele.Title}
                    />
                     </Link>
                  </div>
                  <div className="h-5/12 flex flex-wrap">
                    <h5 className="mt-3 text-2xl font-serif text-start lg:text-xl wrap">
                      {ele.Title}
                    </h5>
                   
                  </div>
                  <div className=' h-6/12 flex items-end  '>
                  <h6 className="m-2 ml-5 text-xl font-serif mt-4 ">
                      {ele.Year}
                    </h6>
                    <span className="mt-2 ml-4 ">
                      <button  className="px-7 py-2 bg-indigo-700 rounded-3xl text-white hover:bg-indigo-500">
                        View
                      </button>
                    </span>
                  </div>
                 
                </div>
              );
            })}
          </div> 
        </div>  
            
        </div>
    );
};

export default Home;