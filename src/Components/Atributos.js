import React from 'react';

const Atributos = () => {
        const abre = 8;
        const agora = new Date().getHours();
        const estilo = {
          color: "blue",
          fontSize: "20px",
          fontFamily: "Helvetica"
        };
        

        //Manipulando Evento
        function handleClick(event) {
            event.target.classList.add("aberto");
        }
        
        return (
          <div>
          <p style={{textAlign: "center"}}>--------------------------------------------------------------------------------------------------------------</p>    
            <h1>Atributos no React</h1>
            A maior parte dos atributos de HTML possuem o mesmo nome em JSX,
            porém existem casos especiais como no caso do class que vira 
            className e for que virá htmlFor. Outra diferença é a transformação
             dos atributos em camelCase, ex: onclick vira onClick.     
            <h2 style={estilo}>Empresa</h2>
            <form className="container">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" />
            </form>
            <p className={agora > abre ? "aberto" : "fechado"}>Funcionamento</p>
            <br></br>
            <p style={{textAlign: "center"}}>--------------------------------------------------------------------------------------------------------------</p>
            <h1>Manipulando Eventos</h1>
            <button onClick={handleClick}>Clique para deixar verde</button>
          </div>
        );
      };
    
 

export default Atributos;
