import { Link } from "react-router-dom" // Importa a biblioteca "Link" do react router dom
import './navbar.css' // Importa o css geral da navbar
export default function Navbar({titulo, text1, text2, text3, text4, text5, url1, url2, url3, url4, url5}) { // Cria a função e define os parâmetros
    return(
        <div>
            <header className='header-navbar'> 
                <h3 className='titulonavbar' >{titulo}</h3> 
                <Link className="textonavbar" to={url1}>{text1}</Link>
                <Link className="textonavbar" to={url2}>{text2}</Link>
                <Link className="textonavbar" to={url3}>{text3}</Link>
                <Link className="textonavbar" to={url4}>{text4}</Link>
                <Link className="textonavbar" to={url5}>{text5}</Link>
            </header>
        </div>
    )
}
