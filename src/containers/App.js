import React, {Component} from 'react';
import styles from '../assets/App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/withClass';
//''.log => console.log();
class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] inside constructor', props);
        this.state = {
            persons: [
                {id: '1', name: 'Max', age: 28},
                {id: '2', name: 'Mary', age: 27},
                {id: '3', name: 'Halk', age: 33}
            ],
            otherState: 'some data',
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('[App.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] inside componentDidMount');
    }

    shouldComponentUpdate() {
        return true;
    }

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
    };
    togglerPersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            )
        }


        return (
            <WithClass classes={styles.App}>
                <button onClick={() => this.setState({showPersons: true})}>Show persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.togglerPersonsHandler}
                />
                {persons}
            </WithClass>
        );
    }
}

export default App;

