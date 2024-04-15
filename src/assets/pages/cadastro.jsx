import React from 'react';
import '../../App.jsx';

function Cadastro() {
  return (
    <div className='pai'>
      <header></header>
        <div className='telaGeral'>

          <h2 className='tituloCadastro' >CADASTRO</h2>
          <div className='cadastroGeral'>
            

            <div className="cadastroE">
              <label htmlFor="" className='tituloinputE' >Turma:</label>
              <input type="text" className='inputE' />

              <label htmlFor="" className='tituloinputE' >Nome completo</label>
              <input type="text" className='inputE' />

              <label htmlFor="" className='tituloinputE'>Data de nascimento</label>
              <input type="date" className='inputE' />

              <label htmlFor="" className='tituloinputE'>Usuário</label>
              <input type="text" className='inputE' />
            </div>

            <div className="cadastroD">
              <label htmlFor=""className='titulosinputD' >E-mail</label>
              <input type="email" className='inputD'/>

              <label htmlFor="" className='titulosinputD'>Senha</label>
              <input type="password" className='inputD'/>

              <label htmlFor="" className='titulosinputD'>Confirmar senha</label>
              <input type="password" className='inputD'/>
            </div>

          </div>
        </div>
      <footer></footer>
    </div>

  );
}

export default Cadastro;