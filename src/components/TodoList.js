import React, { Component } from 'react'
import TodoItem from './TodoItem'
import CompletedItem from './CompletedItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    render() {
        const {
            todoItems,
            deleteItemHandler,
            completedItems,
            markAsCompletedHandler
        } = this.props;
        return (
            <div className="container">
                <ul className="todo" id="todo">
                {
                    todoItems.map(item => {
                        return <TodoItem key={item.id} title={item.todoItem}
                        createdAt = {item.createdAt} 
                        deleteItemHandler={() => deleteItemHandler(item.id, item.isCompleted)}
                        markAsCompletedHandler={() => markAsCompletedHandler(item.id, item.isCompleted)}
                        />
                    })
                }                    
                </ul>    
                <ul className="todo" id="completed">
                {
                    completedItems.map(item => {
                        return <CompletedItem key={item.id} title={item.completedItem}
                        completedAt = {item.completedAt} 
                        deleteItemHandler={() => deleteItemHandler(item.id, item.isCompleted)}
                        markAsCompletedHandler={() => markAsCompletedHandler(item.id, item.isCompleted)}
                        />
                    })
                }                    
                </ul>                            
            </div>
        )
    }
}

TodoList.propTypes = {
    todoItems: PropTypes.array.isRequired,
    completedItems: PropTypes.array.isRequired,
    deleteItemHandler: PropTypes.func,
    markAsCompletedHandler: PropTypes.func
}
