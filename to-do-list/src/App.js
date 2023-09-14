import './App.css';
import Formulario from './Components/Form';
import React, { useState } from 'react';
import Taks from './Components/CadastroTarefas';


function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTasks] = useState(null);

  return (
    <div className="App">

      <div className="Container">


        <Formulario
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTasks={setEditTasks}
        />

        

        <Taks
          tasks={tasks}
          setTasks={setTasks}
          setEditTasks={setEditTasks}
        />

      </div>

    </div>
  );
}

export default App;
