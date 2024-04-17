import './navbar.css'
export default function Navbar() {
    return(
        <>
        <div>
            <header className='header-navbar'> 
                <h3>Carômetro</h3>
                <p onClick={()=>window.location.href =`/home`}>Home</p>
                <p onClick={()=>window.location.href =`/login`}>Login</p>
                <p onClick={()=>window.location.href =`/cadastro`}>Cadastro</p>
                <p>Alunos</p>
                <p onClick={()=>window.location.href =`/home`}>Turmas</p>
                <p>Perfil</p>
            </header>
        </div>
        </>
    )
}
