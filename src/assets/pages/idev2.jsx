import "./idev2.css";
import Navbar from "../../../componentes/Navbar/navbar";
import IdevB from "../../img/IDEVB.png";
import iconalunos from "../../img/PERFIL.png";
import CardAlunos from "../../../componentes/CardAluno/card-a";
import BarraInfo from "../../../componentes/BarraInfo/barrainfo";

function Idev2() {
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

      {/* <div className="vermelho-alunos">
        <img className="logo-idev" src={IdevB} alt="" />
        <h1>Desenvolvimetos de sistemas 2023 - IDEV2</h1>
        <img className="icon-login" src={iconalunos}></img>
      </div> */}

      <BarraInfo
      img1={IdevB}
      cssimg1="logo-idev"
      th1="Desenvolvimento de sistemas 2023 - IDEV2"
      cssth1="titulo-idev"
      img2={iconalunos}
      cssimg2="icon-login"
      />

      <div className="bege-alunos">
        <div className="cards-alunos">
          <div className="linha1-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="Alexandre" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Camilly" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Carol" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Claudete" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Eduarda" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Enzo" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Felipe" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Gabriel O" />
          </div>

          <div className="linha2-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="Gabriel P" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Gabrielle" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Giovanni" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Guilherme T" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Guilherme F" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Henrique" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Henry" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Isabela" />
          </div>

          <div className="linha3-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="Jhuan M" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Juan M" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Kauan" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Lucas L" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Lucas M" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Lucas Z" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Manuela" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Matheus S" />
          </div>

          <div className="linha4-alunos">
            <CardAlunos icone="../src/img/Garoto1.png" nome="Matheus R" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Pedro L" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Pedro H" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Tomás" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Vinicius" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Vitoria" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="Yasmim" />
            <CardAlunos icone="../src/img/Garoto1.png" nome="aluno 32" />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Idev2;
