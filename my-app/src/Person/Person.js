import React from 'react';

const person = (props) => {
    // return <p> I am a Person! An I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div>
            <p> I am {props.name}! An I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
