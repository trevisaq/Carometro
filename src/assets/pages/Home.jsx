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

        <div className="cards-home">

          <div className='card1'>
            <div className='card1-branco'>

              <img className='idevicon' src={idevicon}></img>
              <h3>Desenvolvimento de</h3>
              <h3>Sistemas</h3>

            </div>
            <div className='card1-vermelho'>
              <p>IDEV - 1</p>
              <p>IDEV - 2</p>
              <p>IDEV - 3</p>
            </div>
          </div>

          <div className='card2'>
            <div className='card2-branco'>
              <img className='imecicon' src={imecicon}></img>
              <h3>Mêcanica</h3>
            </div>
            <div className='card2-vermelho'>
                <p>IMEC - 1</p>
                <p>IMEC - 2</p>
                <p>IMEC - 3</p>
            </div>
          </div>

          <div className='card3'>
            <div className='card3-branco'>
              <img className='ielecicon' src={ielecicon}></img>
              <h3>Elétrica</h3>
            </div>
            <div className='card3-vermelho'>
                <p>IELE - 1</p>
                <p>IELE - 2</p>
                <p>IELE - 3</p>
            </div>
          </div>


        </div>
    </div>
  </div>
  );
}

export default Home;