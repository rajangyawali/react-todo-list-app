import React from 'react'

const TodoItem = (props) => {
  return (
    <li className="list-group-item text-capitalize d-flex border justify-content-between my-1">
        <h6>{props.title}</h6>
        <div className="todo-icon">
            <span className="mx-2 text-success">
                <i className="fa fa-edit" onClick={props.onEdit}/>
            </span>
            <span className="mx-2 text-danger">
                <i className="fa fa-trash" onClick={props.onDelete}/>
            </span> 
        </div>
    </li>
  )
}

export default TodoItem
