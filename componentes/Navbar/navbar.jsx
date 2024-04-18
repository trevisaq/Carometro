import './navbar.css'
export default function Navbar({titulo, text1, text2, text3, text4, text5, text6, url1, url2, url3, url4, url5, url6}) {
    const redirect=(urlx)=>{
        window.location.href = urlx
    }
    return(
        
        <>
        <div>
            <header className='header-navbar'> 
                <h3>{titulo}</h3>
                <p onClick={()=>redirect(url1)}>{text1}</p>
                <p onClick={()=>redirect(url2)}>{text2}</p>
                <p onClick={()=>redirect(url3)}>{text3}</p>
                <p onClick={()=>redirect(url4)}>{text4}</p>
                <p onClick={()=>redirect(url5)}>{text5}</p>
                <p onClick={()=>redirect(url6)}>{text6}</p>
            </header>
        </div>
        </>
    )
}
