import "./barrainfo.css"
export default function BarraInfo({img1, cssimg1, img2, cssimg2, img3, cssimg3, h1, cssh1, th3, cssth3}){
    return(
        <div className="barrainfo">
            <img className={cssimg1} src={img1}></img>
            <img className={cssimg2} src={img2}></img>
            <img className={cssimg3} src={img3}></img>
            <h1 className={cssh1}>{h1}</h1>
            <h3 className={cssth3}>{th3}</h3>
        </div>
    )
}

