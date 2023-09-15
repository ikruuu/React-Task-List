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
                    alert('Tarefa completa');
                };
                return item;
            })
        )
    };



    return (
        <div className="Tarefas">

            {tasks.map((todo) => (

                <li className="list-none flex my-5 items-center rounded border-2 px-8 py-2" key={todo.id}>

                    <input
                        type="text"
                        value={todo.title}
                        className="outline-0 cursor-default"
                        onChange={(event) => event.preventDefault()} 
                    />

                    <div className="flex gap-1">

                        <button className="" onClick={() => taskComplete(todo)}>
                            
                            <svg className="stroke-green-400" 
                                xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><g>
                                <path d="M15.811,10.399c0.45-0.46-0.25-1.17-0.71-0.71l-3.56,3.56c-0.58-0.58-1.16-1.16-1.73-1.73
                                 c-0.46-0.46-1.17,0.25-0.71,0.71l2.08,2.08c0.2,0.19,0.52,0.19,0.71,0L15.811,10.399z"/>
                                <path d="M12,21.933c-5.478,0-9.934-4.456-9.934-9.933S6.522,2.067,12,2.067S21.934,6.523,21.934,12
                                S17.478,21.933,12,21.933z M12,3.067c-4.926,0-8.934,4.007-8.934,8.933S7.074,20.933,12,20.933s8.934-4.007,8.934-8.933
                                S16.926,3.067,12,3.067z"/>
                                </g>
                            </svg>

                        </button>

                        <button className="" onClick={() => taskDelete(todo)}>
                        
                            <svg className="stroke-red-500" 
                                xmlns="http://www.w3.org/2000/svg" width="32px" height="32px"  viewBox="0 0 24 24"><g>
                                <path d="M19.45,4.06h-4.18v-0.5c0-0.82-0.67-1.5-1.5-1.5h-3.54c-0.83,0-1.5,0.68-1.5,1.5v0.5H4.55
                                c-0.64,0-0.64,1,0,1h0.72l0.42,14.45c0.04,1.36,1.14,2.43,2.5,2.43h7.62c1.36,0,2.46-1.07,2.5-2.43l0.42-14.45h0.72
                                C20.09,5.06,20.09,4.06,19.45,4.06z M9.73,3.56c0-0.27,0.22-0.5,0.5-0.5h3.54c0.28,0,0.5,0.23,0.5,0.5v0.5H9.73V3.56z M17.31,19.48
                                c-0.03,0.82-0.69,1.46-1.5,1.46H8.19c-0.81,0-1.47-0.64-1.5-1.46L6.26,5.06h11.48L17.31,19.48z"/>
                                <path d="M8.375,8.002L8.375,8.002c-0.016-0.645,0.984-0.642,1,0l0.25,10c0.016,0.645-0.984,0.642-1,0
                                L8.375,8.002z"/>
                                <path d="M15.625,8.007c0.016-0.644-0.984-0.643-1,0l0,0l-0.25,10c-0.016,0.644,0.984,0.643,1,0L15.625,8.007
                                z"/>
                                </g>
                            </svg>

                        </button>
                    </div>
                </li>

            ))}

        </div>

    );
};

export default Taks;