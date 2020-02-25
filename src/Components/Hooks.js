import React from 'react'

const Hooks = () => {
    // useState  é um Hook que define uma variavél reativa
    // const countState = React.useState(0);
    // const count = countState[0]; // valor inicial: 0
    // const setCount = countState[1]; // função que modifica o valor de count

    // Mesma coisa que o código abaixo, porém aqui estamos
    // fazendo a desestruturação (destructuring) da array
    const [contador, setContador] = React.useState(0);
    const [color, setColor] = React.useState("red");
    const colors = ["blue", "red", "tomato", "green"];
    const style = {
    backgroundColor: color,
    width: "200px",
    height: "200px"
    };
    
    return (
        <div>
           <p style={{textAlign: "center"}}>--------------------------------------------------------------------------------------------------------------</p> 
           <h1>Hooks</h1>
           Utilizamos o React pela facilidade de sincronização 
           do estado. Antes dos Hooks, isso só era possível em 
           componentes criados através de classes.<br></br>
           {/* podemos colocar a expressão diretamente no elemento
           ou criar a funçaõ e chamala, assim como no ex abaixo */}
           O Hook mais utilizado é o useState, ele irá retornar uma array 
           com 2 itens. O primeiro é o valor inicial do estado e o segundo
           é uma função que modificar o estado.<br></br><br></br>
           {/* Toda vez que uma variável definida através do Hook useState, 
           for modificada, o componente que depender desse estado será atualizado. */}
           <button onClick={() => setContador(contador + 1)}>Comprar</button>
        <p>Total: {contador}</p>
        <p>Preço: R$ {contador * 19}</p> 

        <h2>Outro exemplo de useState:</h2> 
        {colors.map(color => (
        <button key={color} onClick={() => setColor(color)}>
          {color}
        </button>
        ))}
         <div style={style}></div>        
        </div>
    )
};

export default Hooks
