import React from 'react'

const Condicional = () => {
    const logado = true;
    let saudacao;
    if (logado) {
      saudacao = <h2>Bem vindo, você está logado.</h2>;
    } else {
      saudacao = <h2>Logue para acesso os cursos</h2>;
    }
  
    return (
      <div>
        <p style={{textAlign: "center"}} >--------------------------------------------------------------------------------------------------------------</p>            
        <h1>Condicionais</h1>
        Não se pode utilizar IF dentro das 
        chaves ou do return ().
        <br></br>
        Condicional que verifica se estou logado:
        {saudacao}
      </div>
    );
  };

export default Condicional
