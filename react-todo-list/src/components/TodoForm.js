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

            console.log(uuidv4());
            props.addTodo({ ...todo, id: uuidv4() });
            
            setTodo({ ...todo, task:'' });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='task'
                    type='text'
                    value={todo.task}
                    onChange={handleTaskInputChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm
