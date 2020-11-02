import React from 'react'

export default function Todo(props) {
    const handleClick = () => {
        props.handleToggleItem(props.item.id)
    }
        
    return (
        <div onClick={handleClick} className={props.item.completed ? 'completed' : ''} >
            <p>{props.item.task}</p>  
        </div>
    )
}
