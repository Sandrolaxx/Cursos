import React,{useState} from 'react'
import NavegacaoRouterDom from '../Components/NavegacaoRouterDom'

const Sobre = () => {
 
const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  }

  return (
    <div>
      <h1>Sobre/Formulário</h1> 
           <NavegacaoRouterDom/>
           Para criar um formulário controlado com o React,
            você deve passar no value o valor reativo e 
            definir o evento onChange para que o mesmo 
            atualize o estado usando setState  .
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          value={form.mensagem}
          onChange={handleChange}
        /><br></br><br></br>
        <button>Enviar</button>
      </form>
      <ul>
        <li>Nome: {form.nome}</li>
        <li>Email: {form.email}</li>
        <li>Mensagem: {form.mensagem}</li>
      </ul>
    </div>
  );
};

export default Sobre;