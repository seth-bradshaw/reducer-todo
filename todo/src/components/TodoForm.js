import React, { useState } from 'react';

const initialForm = {
    task: '',
    id: Date.now(),
    completed: false
}

const TodoForm = (props) => {
    const {handleAddItem, clearList} = props;
    const [form, setForm] = useState(initialForm)
    const handleChanges = e => {
        const {name, value} = e.target
        setForm({...form, 
            [name]:value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem(form)
        setForm(initialForm)
    }

    const handleClear =  e => {
        e.preventDefault()
        e.stopPropagation()
        clearList()
    }
    return(
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChanges} name='task' value={form.task}/>
                <button>Submit</button>
                <button onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
    
}
export default TodoForm