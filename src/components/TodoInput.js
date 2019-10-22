import React, { Component } from 'react'
import {ReactComponent as AddIcon} from './add_icon.svg'
import PropTypes from 'prop-types'



export default class TodoInput extends Component {

    state = {
        title: ''
    }
    
    changeHandler = e => this.setState({[e.target.name] : e.target.value});
    onSubmit = e => {
        e.preventDefault();
        if(this.state.title !== ''){
            this.props.addTodo(this.state.title);
            this.setState({
                title: ''
            });
        }        
    }

    render() {        
        
        return (            
                <header>                    
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="title" placeholder="Enter activity..." id="item" 
                        onChange={this.changeHandler} 
                        value={this.state.title}
                        />
                        <button id='add' type="submit">
                        <AddIcon />
                        </button> 
                    </form>                   
                </header>
        )
    }
}

TodoInput.propTypes = {
    addTodo: PropTypes.func.isRequired
}