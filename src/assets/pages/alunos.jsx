import "./alunos.css";
import Navbar from "../../../componentes/Navbar/navbar";
import IdevB from "../../img/IDEVB.png";
import iconalunos from "../../img/PERFIL.png";
import CardAlunos from "../../../componentes/CardAluno/card-a";

function Alunos() {
  return (
    <div className="pai-alunos">
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
      />

      <div className="vermelho-alunos">
        <img className="logo-idev" src={IdevB} alt="" />
        <h1>Desenvolvimetos de sistemas 2023 - IDEV2</h1>
        <img className="icon-login" src={iconalunos}></img>
      </div>

      <div className="bege-alunos">
        <div className="cards-alunos">
          <div className="linha1-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
          </div>

          <div className="linha2-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
          </div>

          <div className="linha3-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
          </div>

          <div className="linha4-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="alexandre" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alunos;
