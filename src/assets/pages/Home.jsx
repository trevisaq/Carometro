import React from "react";
import "../../App.jsx";
import "./home.css";
import logosenai from "../../img/SENAI.png";
import iconhome from "../../img/PERFIL.png";
import imagetroll from "../../img/IMAGETROLL.jpeg";
import Navbar from "../../../componentes/Navbar/navbar.jsx";
import Card from "../../../componentes/Card/card.jsx";

function Home() {
  return (
    <div className="pai-home">
      <Navbar
        titulo={"Carômetro"}
        text1="Home"
        url1="/home"
        text2="Login"
        url2="/login"
        text3="Cadastro"
        url3="/cadastro"
        text4="Alunos"
        url4=""
        text5="Turmas"
        url5=""
      ></Navbar>

      <div className="vermelho-home">
        <img className="imagetroll" src={imagetroll}></img>
        <img className="logosenai-home" src={logosenai}></img>
        <img onClick={()=>window.location.href ='/login'} className="icon-home" src={iconhome}></img>
      </div>

      <div className="vemelho-home2">
        <h3 className="subtitulo-home">Senai Shunji Nishimura</h3>
      </div>

      <div className="bege-home">
        <div className="cards-home">
          <Card
            icone={"../src/img/IDEV.png"}
            titulo={"Desenvolvimento de"}
            titulo2={"sistemas"}
            informacao1={"IDEV - 1"}
            informacao2={"IDEV - 2"}
            informacao3={"IDEV - 3"}
          ></Card>

          <Card
            icone={"../src/img/IMEC.png"}
            titulo={"Mecânica"}
            titulo2={""}
            cor="#781B1B"
            informacao1={"IMEC - 1"}
            informacao2={"IMEC - 2"}
            informacao3={"IMEC - 3"}
          ></Card>

          <Card
            icone={"../src/img/IELEC.png"}
            titulo={"Eletroeletrônica"}
            titulo2={""}
            informacao1={"IELE - 1"}
            informacao2={"IELE - 2"}
            informacao3={"IELE - 3"}
          ></Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
