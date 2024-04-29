import "./barrainfo.css"
export default function BarraInfo({img1, img2, img3, texto}){
    return(
        <div className="barrainfo">
            <img src={img1}></img>
            <h1>{texto}</h1>
            <img src={img2}></img>
            <img src={img3}></img>
        </div>
    )
}