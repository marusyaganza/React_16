import React from 'react';
import styles from './Cockpit.css'

const cockpit = (props) => {
    let classes = [];
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    return (
        <div className={styles.Cockpit}>
            <h1> {props.appTitle} </h1>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <p className={classes.join(' ')}> This is really working </p>
        </div>
    );
}
export default cockpit;
