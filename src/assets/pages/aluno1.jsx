
import "./aluno1.css";
import Navbar from "../../../componentes/Navbar/navbar";
import BarraInfo from "../../../componentes/BarraInfo/barrainfo";
import imagetroll from "../../img/IMAGETROLL.jpeg";

export default function Aluno1(){
    return(
        <>
            <Navbar
            titulo={"Carômetro"}
            text1="Home"
            url1="/home"
            text2="Login"
            url2="/login"
            text3="Cadastro"
            url3="/cadastro"
            text4="Alunos"
            url4="/idev2"
            text5="Turmas"
            url5=""
            />

            <BarraInfo  
            texto="Giovani Canella de Souza"
            />
      </>

    )
}