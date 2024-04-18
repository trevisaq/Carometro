import React from "react";
import "../../App.jsx";
import "./login.css";
import logosenai from "../../img/SENAI.png"
import logochave from "../../img/CHAVE.png"

function Login() {
  return (
    <div className="pai-login">

      <div className="vermelho-login">
        <img className="logosenai" src={logosenai} alt="" />
        <img className="logochave" src={logochave} alt="" />
      </div>

      <div className="branco-login">
        <div className="geral-login">

          <h1>LOGIN</h1>

            <label htmlFor="usuario" className="titulosinput" >Usuário</label>
            <input type="text" className="inputprincpal" />

            <label htmlFor="senha" className="titulosinput" >Senha</label>
            <input type="password" className="inputprincpal" />

          <div className="lembre-login">
            <div className="check">
              <input type="checkbox"  />
              <label htmlFor="checkbox">Lembre-se de mim</label>
            </div>
            <a href="">Esqueceu sua senha?</a>
          </div>

          <div className="entrar">
            <button onClick={()=>window.location.href ='/home'} className="botao-login">ENTRAR</button>
          </div>

          <div className="inscrevase">
            <label htmlFor="button">Não tem uma conta?</label>
              <a href="">INSCREVA-SE</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
