import logo from './logo.svg';
import './App.css';
import Formulario from './Components/Form';
import React,{useState} from 'react';


function App() {
const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      
      <div className="Container">

        <div className='form'>
          <Formulario
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          />
        </div>

      </div>

    </div>
  );
}

export default App;
