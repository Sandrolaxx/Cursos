import React from 'react'

const Props2 = props => {
    return (
        <div className="flex">
          {props.produtos
          .filter(produto => (produto.preco < 1700))
          .map(produto => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
              <img style={{width: "200px", height:"200px", 
              margin:"20px"}} 
              src={produto.fotos[0].src} 
              alt={produto.fotos[0].alt} />
              <h2>Valor: R${produto.preco}</h2>
            </div>
          ))}
        </div>
      );
    };

export default Props2
