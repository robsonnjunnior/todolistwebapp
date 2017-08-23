import React from 'react'

export default props => (
    <header className='page-header'>
        <h2> {props.name} <small>{props.small}</small> </h2>

        <h4>API Node</h4>
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>

    </header>
)
