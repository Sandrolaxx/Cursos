import React from 'react'
import NavegacaoRouterDom from '../Components/NavegacaoRouterDom'
import Props2 from '../Components/Props2';

const Produtos = () => {
    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
      fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
        .then(response => response.json())
        .then(json => setProdutos(json));
    }, []);

      return (
          <div>
            <h1>Produtos</h1>
             <NavegacaoRouterDom/> 
             {produtos.length ? (
                <Props2 produtos={produtos} />
              ) : (
                "Carregando..."
              )}                   
        </div>
    )
}

export default Produtos;
