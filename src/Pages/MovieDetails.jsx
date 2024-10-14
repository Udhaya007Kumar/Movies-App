import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMovieDetails } from '../Features/MovieThunk';


const MovieDetails = () => {


    const [activeTab, setActiveTab] = useState('Description'); // State for active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change active tab when a button is clicked
  };


  const { imdbID } = useParams();

  useEffect(()=>{
      dispatch(selectMovieDetails(imdbID))
  },[imdbID])
   
  //

     
     const MovieDetails = useSelector((state)=>state.movies.movieDetails);
    const dispatch = useDispatch();
   
    console.log(MovieDetails);
    console.log(MovieDetails.Year);



    
    if(!MovieDetails || MovieDetails.length===0){
      return(
        <div className='m-12'>
          <p>Loading</p>
        </div>
      )
     }



    
    return (
        <div className='font-serif'>
          
          {/* <h1>{MovieDetails.Year}</h1> */}
          
         {/* <h1>{MovieDetails}</h1> */}
          
         <div className="p-2">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                 { MovieDetails.Year}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                    {MovieDetails.Title}
                  </h1>
                  <div className="flex mb-4">
                    <button
                      className={`flex-grow text-lg px-1 py-2 ${activeTab === 'Description' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'border-b-2 border-gray-300'}`}
                      onClick={() => handleTabChange('Description')}
                    >
                      Movies
                    </button>
                    <button
                      className={`flex-grow text-lg px-1 py-2 ${activeTab === 'Reviews' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'border-b-2 border-gray-300'}`}
                      onClick={() => handleTabChange('Reviews')}
                    >
                      Reviews
                    </button>
                    <button
                      className={`flex-grow text-lg px-1 py-2 ${activeTab === 'Details' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'border-b-2 border-gray-300'}`}
                      onClick={() => handleTabChange('Details')}
                    >
                      Details
                    </button>
                  </div>
  
                  {activeTab === 'Description' && (
                    <div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Rated</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Rated}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Released</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Released}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Runtime</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Runtime}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Genre</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Genre}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Director</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Director}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Writer</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Writer}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Actors</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Actors}</span>
                    </div>
                    <p className='ml-auto text-gray-900'>{MovieDetails.Plot}</p>
                    {/* <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Plot</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Plot}</span>
                    </div> */}
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Country</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Country}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Awards</span>
                      <span className="ml-auto text-gray-900">{MovieDetails.Awards}</span>
                    </div>
                  </div>
                  )}
                  {activeTab === 'Reviews' && (
                    <div>
                    {
                      MovieDetails.Ratings.map((rating,index)=>{
                        return(
                          <div>
                            <div className="flex border-t border-gray-200 py-2">
                      <span className="text-gray-500">Source</span>
                      <span className="ml-auto text-gray-900">{rating.Source}</span>
                    </div>
                    <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Value</span>
                    <span className="ml-auto text-gray-900">{rating.Value}</span>
                  </div>
                            </div>

                          
                    
                         
                          
                        )

                      })
                    }
                    </div>
                  )}
                  {activeTab === 'Details' && (
                    <div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Metascore</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.Metascore}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">imdbRating</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.imdbRating}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">imdbVotes</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.imdbVotes}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">imdbID</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.imdbID}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Type</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.Type}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">DVD</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.DVD}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">BoxOffice</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.BoxOffice}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Production</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.Production}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Website</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.Website}</span>
                      </div>
                      <div className="flex border-t border-gray-200 py-2">
                        <span className="text-gray-500">Response</span>
                        <span className="ml-auto text-gray-900">{MovieDetails.Response}</span>
                      </div>
                    </div>
                  )}
                </div>
                <img
                  alt={MovieDetails.Title}
                  className="object-top lg:w-1/3 w-full lg:h-auto h-64 object-cover lg:object-center rounded"
                  src={MovieDetails.Poster}
                />
              </div>
            </div>
          </section>
        </div>  
      </div>
    );
};

export default MovieDetails;


// <div className=' lg:container lg:mx-auto p-[80px]'>
//                     <div className='m-2 lg:m-5'>
//                     <h1 className='text-2xl font-serif text-white '>Mission: Impossible - Ghost Protocol</h1>
//                     </div>
//                    <div className=' grid gap-4 lg:flex bg-slate-700'>


                    
//                     <div className='   '>
//                         <div className='    bg-white '>
//                            <img src="https://m.media-amazon.com/images/M/MV5BZjUwZjg2ZjAtY2RhZi00YmZjLTlhNGQtOWQwNDk1MjhhM2NhXkEyXkFqcGc@._V1_SX300.jpg" alt="" />

//                         </div>

                         
//                     </div>




//                     <div className= 'w-8/12 m-2 '>
//                     <div className=''>
//                     <h1 className='hidden lg:block text-3xl font-bold text-center text-purple-500 '>Mission: Impossible - Ghost Protocol</h1>
//                     </div>

//                        <div className='p-2 grid  lg:flex lg:justify-between'>
//                         <div className='font-serif text-white  lg:mt-5'>
//                             <h5 className='text-xl lg:text-2xl text-purple-500  '>Year  :    <span className='text-white'>2015</span></h5>
//                             <h5 className=' text-xl lg:text-2xl text-purple-500  '>Rated  :    <span className='text-white'>PG-13</span></h5>
//                             <h5 className='text-xl lg:text-2xl text-purple-500  '>Runtime  :    <span className='text-white'>131 min</span></h5>
//                             <h5 className=' text-xl lg:text-2xl text-purple-500 '>Genre  :    <span className='text-white'>Action, Adventure, Thriller</span></h5>
                            
                           
//                         </div>
//                         <div>test</div>
//                         <div>test</div>
//                        </div>
//                        <div className='mt-2 '>
//                         testt
//                        </div>



//                     </div>



//                    </div>
                   
//                 </div>     