import React, { Component } from 'react'
import {ReactComponent as RemoveIcon} from './remove_icon.svg'
import {ReactComponent as DoneIcon} from './done_icon.svg'
import PropTypes from 'prop-types'


export default class TodoItem extends Component {
    render() {
        const {
            title,
            createdAt,
            deleteItemHandler,
            markAsCompletedHandler
        } = this.props;
        return (
            <li>
                {title} <br/> <span style={{ color: '#aaa', fontStyle: 'italic' }}>Created @: {createdAt}</span>
                <div className="buttons">
                    <button className="remove" onClick={deleteItemHandler}><RemoveIcon /></button>
                    <button className = "complete" onClick={markAsCompletedHandler}><DoneIcon /></button>
                </div>
            </li>
            
        )
    }
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    deleteItemHandler: PropTypes.func,
    markAsCompletedHandler: PropTypes.func
}
