import React from 'react';
import '../../App.jsx';
import "./home.css";
import logosenai from "../../img/SENAI.png"
import idevicon from "../../img/IDEV.png"
import ielecicon from "../../img/IELEC.png"
import imecicon from "../../img/IMEC.png"
import iconhome from "../../img/PERFIL.png"
import Navbar from "../../../componentes/Navbar/navbar.jsx"
import imagetroll from "../../img/IMAGETROLL.jpeg"



function Home() {
  return (
    <div className='pai-home'>

      <Navbar></Navbar>

      <div className='vermelho-home'>
        <img  className="imagetroll" src={imagetroll}></img>
        <img className='logosenai-home' src={logosenai}></img>
        <img className='icon-home' src={iconhome}></img>
      </div>
      
      <div className='vemelho-home2'>
        <h3 className='subtitulo-home'>Senai Shunji Nishimura</h3>
        <input type="text" className="inputprincpal-home" placeholder="Busque no Carômetro" />
      </div>


    
     

      <div className='bege-home'>
      </div>
    </div>
  );
}

export default Home;