import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODO APP</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#25b99a',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    zIndex: '6',
    height: '80px',
    boxShadow: 'none'    
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',    
}
