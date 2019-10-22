import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import './Reset.css';
import uuid from 'uuid';
import About from './components/pages/About';

export default class App extends Component {

  state = {
    todoItems: [],
    completedItems: []
  }
    
  addTodo = (title) => {
      const newTodoItem = {
          id: uuid.v4(),
          todoItem: title,
          isCompleted: false,
          createdAt: Date().slice(0, 24)
        }
        this.setState({
          todoItems: [...this.state.todoItems,newTodoItem]
        });      
  }

  deleteItemHandler = (id, isCompleted) => {
    if (isCompleted) {
      this.setState({
        completedItems: [...this.state.completedItems.filter(item => item.id !== id)]
      })
    } else {
      this.setState({
        todoItems: [...this.state.todoItems.filter(item => item.id !== id)]
      })
    }
  };

  markAsCompletedHandler = (id, isCompleted) => {
    let selectedItem;      

      if (isCompleted) {
        selectedItem = this.state.completedItems.find(item => item.id === id);                        
        const newTodoItem = {
          id: selectedItem.id,
          todoItem: selectedItem.completedItem,
          isCompleted: false,
          createdAt: Date().slice(0, 24)
        };
        this.setState({
          completedItems: [...this.state.completedItems.filter(item => item.id !== id)],
          todoItems: [...this.state.todoItems, newTodoItem]
        });
      } else {
        selectedItem = this.state.todoItems.find(item => item.id === id);
        const newCompletedItem = {
          id: selectedItem.id,
          completedItem: selectedItem.todoItem,
          isCompleted: true,
          completedAt: Date().slice(0, 24)
        };        
        this.setState({
          completedItems: [...this.state.completedItems, newCompletedItem],
          todoItems: [...this.state.todoItems.filter(item => item.id !== id)]
        });        
      }               
  }

  render() {
    
    return (
      <Router>
        <div>
          < Header / >
          <Route exact path="/" render={props => (            
            <React.Fragment>
              <TodoInput addTodo={this.addTodo} />
              
              <TodoList todoItems={this.state.todoItems}
              completedItems={this.state.completedItems}
              deleteItemHandler={this.deleteItemHandler}
              markAsCompletedHandler={this.markAsCompletedHandler}
              />
            </React.Fragment>
          )} /> 
          <Route path="/about" component={About} />     
      </div>
      </Router>
    )
  }
}
