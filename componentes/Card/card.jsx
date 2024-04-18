import "./card.css"

export default function Card({titulo, titulo2, informacao1, informacao2, informacao3, cor, icone}) {
    return(
        <>
        <div className='card'>
            <div className='card-branco'>

              <img className='iconesala-home' src={icone}></img>
              <h3>{titulo}</h3>
              <h3>{titulo2}</h3>
            </div>
            <div className='card-vermelho' style={{backgroundColor: cor}}>
              <p>{informacao1}</p>
              <p>{informacao2}</p>
              <p>{informacao3}</p>
            </div>
          </div>

        </>
  )
}
