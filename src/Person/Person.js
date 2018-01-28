import React from 'react';
import './Person.css'

const style = {
    '@media (min-width=500px)': {
        width: '450px'
    }
};
const person = (props) => {
    return (

        <div style={style}
             className="Person"
        >
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
        ;
};
export default person;
