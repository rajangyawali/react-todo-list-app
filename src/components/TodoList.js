import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {
            props.items.map(item =>{
                return (
                    <TodoItem 
                    key={item.id} 
                    title={item.title} 
                    onDelete={() => props.deleteHandler(item.id)}
                    onEdit={() => props.editHandler(item.id)}/>
                )
            })
        }     
        <button onClick={props.clearHandler} type="button" className="btn btn-danger btn-block mt-5">Clear List</button>
    </ul>
    
  )
}

export default TodoList
