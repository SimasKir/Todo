import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ( props ) => {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            props.addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task:'' });
        }
    }

    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <TextField
                    name='task'
                    type='text'
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm
