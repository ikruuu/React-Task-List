import React from "react";
import '../App.css'
const Taks = ({ tasks, setTasks, setEditTasks }) => {

    const taskDelete = ({ id }) => {
        setTasks(tasks.filter((tasks) => tasks.id !== id));
    };

    const taskComplete = (todo) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === todo.id) {
                    alert('Tarefa completa')
                }
                return item;
            })
        )
    };



    return (
        <div className="Tarefas">

            {tasks.map((todo) => (
                <li className="task-list" key={todo.id}>

                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => event.preventDefault()} />

                    <div className="buttons">

                        <button className="complete-button task-button" onClick={() => taskComplete(todo)}>
                            A
                        </button>

                        <button className="delete-button task-button" onClick={() => taskDelete(todo)}>
                            D
                        </button>
                    </div>
                </li>

            ))}

        </div>

    );
};

export default Taks;