import React from 'react'

export default function About() {
    return (
        <React.Fragment >
            <div style={aboutStyle}>                
                <p style={{ color: '#aaa', fontSize: '12px', fontWeight: '700' }}>
                This is Simple todo list application developed using React JS. throughout the development            
                I'm trying to show: Inline Styling in react, Style by declaring a variable in react, Style
                by the external CSS file, Applying React Router, using states, props, PropTypes, 
                External library that helps to generate random unique ID (uuid) Class based 
                and function based components, and Applying ES6 like Arrow functions, spread operators, 
                and right soon I'll include Lifecyle Hooks, using local storage like i do before in the todo app.
                The about page is purposely added to show routing in react                                 
                </p>
            </div>            
        </React.Fragment>
            
        )
}
const aboutStyle = {
    width: '95%',
    background: '#fff',
    marginTop: '90px',
    marginLeft: '20px',
    borderRadius: '5px',
    boxShadow: '0px 1px 2px rgba(44, 62, 80, 0.10)',
    padding: '14px',
    textAlign: 'center',
    lineHeight: '22px'  
}
