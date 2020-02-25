import React from 'react'
import Props2 from './Props2'

const Props = () => {
    const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
      .then(response => response.json())
      .then(json => setProdutos(json));
  }, []);
    
    return (
        <div>
           <p style={{textAlign: "center"}} >--------------------------------------------------------------------------------------------------------------</p>            
           <h1>Props</h1>
           Podemos passar informações de um componente para 
           o filho através de propriedades (props). São 
           passadas da mesma forma que utilizamos atributos.
           Fazendo a mesma coisa que o exemplo acima, porem usando 
           props, a parte de estilização e montagem da pagina
           está em outro componenete, e sendo puxada e utilizando
           props para passar os valores da API, e filtrando por valor. 
           <br></br><br></br>
           {produtos.length ? (
              <Props2 produtos={produtos} />
            ) : (
              "Carregando..."
            )}
        </div>
    )
}

export default Props
