import React, { useEffect, useState } from 'react';
import '../App.css'
import { v4 as uuidv4 } from "uuid";


const Form = ({ input, setInput, tasks, setTasks, editTask, setEditTask }) => {

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, { id: uuidv4(), title: input, completed: false }]);
        setInput("");


    }
    return (

        <div className=''>
            <form className='w-50 h-20' onSubmit={onFormSubmit}>
                
                <input
                    className="outline-0"
                    type='text'
                    placeholder='Insira uma nova tarefa'
                    value={input}
                    required onChange={onInputChange} />

                <button
                    className="bg-blue-500 p-3.5 rounded hover:cursor-pointer hover:bg-blue-400 transition text-cyan-50"
                    type='submit'>Adicionar</button>

            </form>

            <hr className=''></hr>

        </div>
    )
}

export default Form