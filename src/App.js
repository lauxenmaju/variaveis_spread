import {useState, useEffect} from "react";


function App() {

  const [input,setInput] = useState('');
  const [tarefa,setTarefa]=useState(()=>{
    const tarefasStorage = localStorage.getItem('@tarefa');
    return tarefasStorage
      ? JSON.parse(tarefasStorage)
      : ('Pagar a conta de luz','Estudar react.js');
});

  useEffect(()=>{
      localStorage.setItem('@tarefa',JSON.stringify(tarefa));

  },[tarefa]);
  
  function acionaRegistro(e){
    e.preventDefault();
    setTarefa((prevTarefas)=>[...prevTarefas, input]);
    setInput('');
  }
  return (
    <div >
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={acionaRegistro}>
          <label>Nome da tarefa:</label><br/>
          <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">Registrar</button>
      </form>
      <br/><br/>
        <ul>
          {tarefa.map((tarefa,index) =>(
            <li key={index}>{tarefa}</li>
          ))} 
        </ul>
    </div>
  )
};

export default App;
