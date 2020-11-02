import React, { Component } from 'react'
import Todo from './Todo'

const TodoList = (props) =>{
    return (
        <div className='todoList'>
            {props.initialList.map(item => {
                return <Todo  handleToggleItem={props.handleToggleItem} key={item.id} item={item}/>
            }
        )}
        </div>
    )
}
export default TodoList