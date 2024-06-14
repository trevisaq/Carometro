import "./card-a.css" // Importa o css do card
export default function CardAlunos({nome, icone}){ // Cria a função e define os parâmetros
    return(
        <div className="card-alunos"> 
            <img className="img-alunos" src={icone}></img>
            <h4>{nome}</h4>
        </div>
    )
} 