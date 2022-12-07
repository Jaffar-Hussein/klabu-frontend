import React, { useEffect, useState } from "react";
import NavBar from "./navbar";
import Hero from "./HeroSection"
import Popular from "./popular";
import Vector from '../assets/Vector.svg'
import '../css/main.css'


function Home() {

  return (
    <>
      <div className="top_page">   
         <NavBar />

        <Hero />
        <Popular />
   

      </div>
      
      <img src={Vector} className="bgGradient img-fluid"
 />

    </>
  )
}
export default Home;