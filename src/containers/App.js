import React, {Component} from 'react';
import styles from '../assets/App.css';
import Person from '../components/Persons/Person/Person';
import Errorboundary from './ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons'
//''.log => console.log();
class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Mary', age: 27},
            {id: '3', name: 'Halk', age: 33}
        ],
        otherState: 'some data',
        showPersons: false
    };

    switchNamehandler = (newName) => {
        console.log('was clicked');
        this.setState({
                persons: [
                    {name: newName, age: 28},
                    {name: 'Mary', age: 27},
                    {name: 'Halk', age: 35}
                ]
            }
        )
    };
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
                return p.id === id;
            }
        );
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
                persons: persons
            }
        )
    }
    togglerPersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        const style = {
            //backgroundColor: '#' + (Math.random() * 1000000 ^ 0).toString(),
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            color: 'white',
            cursor: 'pointer'
        };

        let persons = null;
        let btnClass = '';
        if (this.state.showPersons) {
            persons = (
                persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />;
            )
            //style.backgroundColor = 'red';
            btnClass = styles.Red;
        }
//some comment
        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles);
        }
        if (this.state.persons.length <= 1) {
            classes.push(styles.bold);
        }
        return (
            <div className={styles.App}>
                <button
                    className={btnClass}
                    onClick={this.togglerPersonsHandler}>Toggle Persons
                </button>
                <h1> Hi, I'm react app </h1>
                <p className={classes.join(' ')}> This is really working </p>
                {persons}
            </div>
        );
    }
}

export default App;
//return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, I\'m react app '));
