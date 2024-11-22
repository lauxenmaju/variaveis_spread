import { useState } from "react";
import Nome from "./components/Nome";

  
  
function App() {
  // const [pessoa, setPessoa]=useState('Maju');
  
  
  // function trocarNome(pessoa){
  // //alert ('teste');
  // setPessoa(pessoa);
  //  };
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [dadosExibidos, setDadosExibidos] = useState({
    nome: '',
    email: '',
    idade: ''
  }); 

  function acionaRegistro(e) {
    e.preventDefault();
    alert('Teste');
    
    

    
    setDadosExibidos({
      nome,
      email,
      idade
    });
  }

  return (
    <div >
      {/* <h1>Nosso primeiro app em React</h1>
     <h2>OLÁ {pessoa}</h2>
     <h3>Usando componentes</h3>
    
     <button onClick={()=>trocarNome("Testando a troca de nome")}>
     Mudar o nome
     </button><br/>
     <Nome pessoa ='Maria' idade = {17}/>
      */}

      <h1>Cadastrando Usuário</h1>

      
      <form onSubmit={acionaRegistro} >
        <div>
          <label>Nome:</label><br />
          <input
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>

        <div>
          <label>Idade:</label><br />
          <input
            placeholder="Digite sua idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            
          />
          
        </div><br/>

        <button type="submit">Registrar</button>
      </form><br/>

      
      <div>
        <span>Bem vindo: {dadosExibidos.nome || ''}</span><br />
        <span>Email: {dadosExibidos.email || ''}</span><br />
        <span>Idade: {dadosExibidos.idade || ''}</span><br />
      </div>
    </div>
  );
}

export default App;
