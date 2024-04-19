import './alunos.css'
import Navbar from '../../../componentes/Navbar/navbar'
import IdevB from '../../img/IDEVB.png'
import iconalunos from "../../img/PERFIL.png";

function Alunos () {
  return (
    <div className='pai-alunos'>
    
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

        <div className='vermelho-alunos'>
            <img className='logo-idev' src={IdevB} alt="" />
            <h1>Desenvolvimetos de sistemas 2022 - IDEV1</h1>
            <img className='icon-login' src={iconalunos}></img>
        </div>
        
        <div className='bege-alunos'>
            
        </div>
    </div>
  )
}

export default Alunos
