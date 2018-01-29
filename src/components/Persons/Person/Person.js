import React from 'react';
import styles from './Person.css'

const person = (props) => {
    const rdn = Math.random();
    if (rdn < 0.7) {
        throw new Error('something went wrong');
    }
    return (
        <div className={styles.Person}
        >
            <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
        ;
};
export default person;
