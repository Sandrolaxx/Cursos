import React,{useEffect, useState} from 'react'

const FetchEuseEffects = () => {
    const[produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
        .then(response => response.json())
        .then(json => setProdutos(json));
    }, []);
    
    return (
        <div className="flex">
            <p style={{textAlign: "center"}} >--------------------------------------------------------------------------------------------------------------</p>            
           <h1>fetch&useEffect</h1>
           Um dos principais uso do Hook useEffect será para
           puxarmos dados externos via ajax/fetch. Quando 
           estamos puxando informações do servidor, 
           geralmente só precisamos que isso ocorra uma vez. 
           Se passarmos uma array vazia [] na lista de 
           dependências, o efeito só irá ocorrer uma vez.
           Abaixo temos um exemplo utilizando API, e realizando
           uma unica requisição.
           {produtos.map(produto => (
        <div key={produto.id}>
          <h4 style={{textAlign: "center"}}>{produto.nome}</h4>
          <img style={{width: "200px", height:"200px", margin:"20px"}} src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
        </div>
      ))}
        </div>


    );
}

export default FetchEuseEffects
