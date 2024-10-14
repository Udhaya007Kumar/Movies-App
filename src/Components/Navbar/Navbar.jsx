import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {handlebtnclick as handlebtnclicks} from '../../Features/MovieSlice'



const Navbar = () => {



   const refContainer = useRef(null);
   const dispatch = useDispatch();

  const handlebtnclick = () => {
  console.log('hi');
  
   const emailadress = refContainer.current.value; 
   console.log(emailadress);
   dispatch(handlebtnclicks(emailadress))
};






    return (
      <div>
        <div className="relative">
          <div className="p-12 h-[30vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className=" container mx-auto">
              <div className="flex justify-between">
                <div>
                    <Link to="/movies" className='font-bold text-2xl'>SwtMovies</Link>
                </div>
                <div className=' hidden lg:block' >
                    <ul className='flex gap-12 font-serif text-lg'>
                        <li className=' hover:text-white'>
                          <Link to='/'> Home</Link>
                         </li>
                        <li className=' hover:text-white'>
                        <Link to='/about'> About</Link>
                          </li>
                        <li className=' hover:text-white'>Movie</li>
                    </ul>
                </div>
                <div className='mt-2 ml-3 grid gap-2 md:flex'>
                    <button className='mr-5 border-2 px-4 py-2 rounded-xl hover:bg-indigo-500 hover:text-white'>Sign in</button>
                    <button className='mr-5 border-2 px-4 py-2 rounded-xl hover:bg-indigo-500 hover:text-white'>Sign up</button>
                </div>

              </div>
            </div>

          </div>

          <div className=' hidden md:block absolute left-1/3 top-2/4 mt-12 '>
            <h1 className='text-3xl  font-serif text-white'>Search Movies......</h1>
          </div>
          <div className="absolute left-1/2 bottam-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className=" bg-center flex justify-center items-center ">
              <div className=" relative">
                <input
                  type="text"
                   ref={refContainer}
                  className=" text-xm md:text-2xl w-[300px] h-[60px] md:w-[800px] md:h-[75px] p-2 rounded-3xl  shadow-xl"
                />
                <div className=" absolute top-6 right-10" >
                  <button className=" text-2xl xl:text-3xl" onClick={handlebtnclick} >
                    <IoSearchOutline />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


         {/* <div className="bg-slate-800  h-[70vh] ">
        
        </div>  */}
      </div>
    );
};

export default Navbar;