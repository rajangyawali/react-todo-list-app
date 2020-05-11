import React, {Component} from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v1 as uuidv1 }from 'uuid';

class App extends Component {
  state = {
    items:[],
    id:uuidv1(),
    item:'',
    editItem:false
  }

  changeHandler = (e) =>{
    this.setState({
      item: e.target.value
    })
  }

  addHandler = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items : updatedItems, 
      item: '',
      id: uuidv1(),
      editItem: false
    })
  }

  clearHandler = () => {
    this.setState({
      items : []
    })
  }

  deleteHandler = (id) => {
    const filteredItems = this.state.items.filter(item =>
      item.id !== id)
    this.setState({
      items: filteredItems
    })
  }

  editHandler = id => {
    const selectedItem = this.state.items.find(item => item.id === id);
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput 
                item={this.state.item}
                changeHandler={this.changeHandler}
                addHandler={this.addHandler}
                editItem={this.state.editItem}/>
              <TodoList 
                items={this.state.items}
                clearHandler={this.clearHandler}
                deleteHandler={this.deleteHandler}
                editHandler={this.editHandler}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
