import React from "react";
import "../../App.jsx";
import "../../App.css";
import logosenai from "../../img/SENAI.png"
import logochave from "../../img/CHAVE.png"

function Login() {
  return (
    <div className="pai">

      <div className="vermelho">
        <img className="logosenai" src={logosenai} alt="" />
        <img className="logochave" src={logochave} alt="" />
      </div>

      <div className="branco">
        <div className="geral">

          <h1>LOGIN</h1>

            <label htmlFor="usuario" className="titulosinput" >Usuário</label>
            <input type="text" className="inputprincpal" />

            <label htmlFor="senha" className="titulosinput" >Senha</label>
            <input type="password" className="inputprincpal" />

          <div className="lembre">
            <div className="check">
              <input type="checkbox"  />
              <label htmlFor="checkbox">Lembre-se de mim</label>
            </div>
            <a href="https://youtu.be/xvFZjo5PgG0?si=29DA2YrtYhPb4dJe">Esqueceu sua senha?</a>
          </div>

          <div className="entrar">
            <button className="botao" >ENTRAR</button>
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
