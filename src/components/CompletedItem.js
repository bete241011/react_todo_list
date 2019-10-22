import React, { Component } from 'react'
import {ReactComponent as RemoveIcon} from './remove_icon.svg'
import {ReactComponent as DoneIcon} from './done_icon.svg'
import PropTypes from 'prop-types'

export default class CompletedItem extends Component {
    render() {
        const {
            title,
            completedAt,
            deleteItemHandler,
            markAsCompletedHandler
        } = this.props;
        return (
            <li>
                {title} <br/> <span style={{ color: '#aaa', fontStyle: 'italic' }}>Completed @: {completedAt}</span>
                <div className="buttons">
                    <button className="remove" onClick={deleteItemHandler}><RemoveIcon /></button>
                    <button className = "complete" onClick={markAsCompletedHandler}><DoneIcon /></button>
                </div>
            </li>
        )
    }
}


CompletedItem.propTypes = {
    title: PropTypes.string.isRequired,
    deleteItemHandler: PropTypes.func,
    markAsCompletedHandler: PropTypes.func
}