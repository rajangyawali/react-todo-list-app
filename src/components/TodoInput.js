import React from 'react'


const TodoList = (props) => {
  return (
    <div className="card card-body my-3">
        <form onSubmit={props.addHandler}> 
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                        <i className="fa fa-book"/>
                    </div>
                </div>
                <input type="text" 
                    className="form-control text-capitalize"
                    placeholder="Add a todo item"
                    value={props.item}
                    onChange={props.changeHandler}/>
            </div>
            {
                props.editItem ? <button type="submit" className="btn btn-block btn-success mt-3">Edit Item</button> :
                <button type="submit" className="btn btn-block btn-primary mt-3">Add Item</button>
            }
            
        </form>       
    </div>
  )
}

export default TodoList
