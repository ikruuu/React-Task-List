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

        <div className='form'>
            <form className='form__container' onSubmit={onFormSubmit}>

                <input
                    type='text'
                    placeholder='Insira uma nova tarefa'
                    className='input__form'
                    value={input}
                    required onChange={onInputChange} />

                <button
                    className='button__form'
                    type='submit'>Adicionar</button>

            </form>
        </div>
    )
}

export default Form