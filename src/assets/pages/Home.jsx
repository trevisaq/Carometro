import React from 'react';
import '../../App.jsx';
import "./home.css";
import logosenai from "../../img/SENAI.png"
import idevicon from "../../img/IDEV.png"
import ielecicon from "../../img/IELEC.png"
import imecicon from "../../img/IMEC.png"
import iconhome from "../../img/PERFIL.png"



function Home() {
  return (
    <div className='pai'>

        
      <header className='headerHome'><h3>Carômetro</h3> <p>Home</p> <p>Login</p> <p>Cadastro</p> <p>Alunos</p> <p>Turmas</p> <p>Perfil</p></header>

      <div className='home-vermelha'>

        <img className="logosenaihome" src={logosenai} alt="" />
        <p className="subtitulo">Senai Shunji Nishimura</p>
        <input type="text" placeholder='Buscar no Carômetro' className='inputhome' />

      </div> 



      <div className='bege'>
        
        
      </div>

{/* 
      <div class="card1">
        <img className="idevicon" src={idevicon} alt="" />
      </div>

      <div class="card2">
        <img className="imecicon" src={imecicon} alt="" />
      </div>

      <div class="card3">
        <img className="ielecicon" src={ielecicon} alt="" />
      </div> */}

    </div>
  );
}

export default Home;