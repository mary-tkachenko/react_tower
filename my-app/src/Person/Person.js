import React from 'react';

const person = (props) => {
    // return <p> I am a Person! An I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="Person">
            <p onClick = {props.click}> I am {props.name}! An I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;
