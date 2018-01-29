import React, {Component} from 'react';
import styles from '../assets/App.css';
import Person from '../components/Persons/Person/Person';
import Errorboundary from './ErrorBoundary/ErrorBoundary'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                persons = <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            )
        }


        return (
            <div className={styles.App}>
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglerPersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;

