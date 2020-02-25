import React, {useEffect, useState} from 'react'

const USEeffect = () => {
   
        const [title, setTitle] = useState("Titulo da página");
      
        // executa incialmente e depois apenas quando title mudar.
        useEffect(() => {
          document.title = title;
        }, [title]);
      
        function handleChange(event) {
          setTitle(event.target.value);
        }
      
        return (
          <div>
            <p style={{textAlign: "center"}}>--------------------------------------------------------------------------------------------------------------</p> 
            <h1>useEffect</h1> 
            A função passada no useEffect irá ser executada toda 
            vez que o elemento renderizar/atualizar. Podemos 
            passar  no segundo argumento uma lista de 
            dependência, assim a função só irá ocorrer 
            caso o valor de um item da lista mude. Utilizado
            para controlarmos as requisiões para o banco, 
            de tal modo que a requisição para o banco só será 
            realizada se estiver na lista de dependencias.
            <br></br><p>Mude o nome da página:
            <input type="text" value={title} onChange={handleChange} /></p>
          </div>
        );
};


export default USEeffect
