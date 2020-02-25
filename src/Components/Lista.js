import React from 'react'

const Lista = () => {
    const produtos =["Notebook", "Razer Kraken", "Teclado Hiperx Mars"];
    // Ex sem usar arrow function
    // const produtosMap = produtos.map(function(item) {
    //     return <li>{item}</li>;
    // });
    const livros = [
        { nome: "A Clash of Kings", ano: 1996 },
        { nome: "A Game of Thrones", ano: 1999 },
        { nome: "A Storm of Swords", ano: 2000 }
      ]; 
    const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];  
    
    return (
        <div>
            <h1>Arrays no React</h1>
            <ul>
            <h2>Lista de Produtos</h2>
        { /*Assim que se faz comentario dentro do JSX*/ }
        Utilizando Arrow Function podemos inserir a expressão
        diretamente no retorno da função, como no exemplo abaixo         
            {produtos.map(item => <li key={item}>{item}</li>)}
            <br></br>
            <h2>Lista de Filmes lançados após 1998</h2>
        Utilizando .filter para filtrar filmes após o ano de 1998
        e depois o .map para poder mostrar os resultados deste novo array:        
            {livros
            .filter(livro => livro.ano > 1998)
            .map(livro => (
            <li key={livro.nome}>
                {livro.nome} | {livro.ano}
            </li>
            ))}
            <br></br>
            <h2>Lista de empresas</h2>
        Ou podemos criar um array com li dentro e retornar ele já estruturado como no 
        exemplo abaixo, pois esse tipo de retorno é aceitavel, diferente de objetos:    
            {empresas}
            </ul>
        </div>
    );
};

export default Lista;