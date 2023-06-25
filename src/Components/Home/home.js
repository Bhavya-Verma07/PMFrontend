import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import bgimage from "../images/pokemonletsgo.jpg";

import pokemonlogo from "../images/Pokemon-Logo.jpg";
import { Link } from 'react-router-dom';

const images = [
    {
    
     url:pokemonlogo
    },
    {
      url:bgimage
    }
]

const Home = () => {
  return (
    <div
    style={{ 
      paddingTop: "30px",
      height: "100vh",
    }}
  >
    <center>
      <h1 style={{color:"redsmoke"}}>Welcome!</h1>
    </center>
    <center>
      <SimpleImageSlider
        width={790}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </center>
    <div>
      <center>
        <h3 style={{ color: "black" }}>
         Start the game.
        </h3>
        <h4>Instructions</h4>
        <div>
        <Link to="/About">
            <button type="button" className="white_btn" style={{color:"green"}}>
             Click Here For Instructions
            </button>
          </Link>
          </div>
      </center>
    </div>
  </div>
  )
}

export default Home;