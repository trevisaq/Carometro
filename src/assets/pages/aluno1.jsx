
import "./aluno1.css";
import Navbar from "../../../componentes/Navbar/navbar";
import BarraInfo from "../../../componentes/BarraInfo/barrainfo";
import imagetroll from "../../img/IMAGETROLL.jpeg";

export default function Aluno1(){
    return(
        <>
            <div className="Pai-Alunoindividual">
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

                <div className="barrainfo">
                    <h1>Aluno - Giovani Canella de Souza - IDEV2</h1>
                </div>



                <div className="bege-aluno1">
                    <div className="alunoinfos">
                        <div className="imagem-aluno">
                            <img src="../src/img/Garoto1.png" alt="" className="aluno1"/>
                        </div>
                        <div className="informacoes-alunoindividual">
                            <h3>INFORMAÇÕES</h3> 
                            <div className="lista-alunoindividual">
                                <li>Cel: (12) 23456-7890</li>
                                <li>Idade atual: 12 Anos</li>
                                <li>Nascimento 12/3/4567</li>
                                <li>Email: giovani10@Senai.com</li>
                            </div>
                            <div className="botoes-alunosindividuais">
                                <button className="botao-aluno">Voltar</button>
                                <button className="botao-aluno">Editar</button>
                            </div>
                        </div>
                    </div>
                    <div className="ocorrencias">
                        <h3>Ocorrencias</h3>
                    </div>
                </div>
            </div>

      </>

    )
}