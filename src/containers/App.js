import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import classes from './App.css';
import Person from '../components/Persons/Person/Person.js';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    });
    const person = {
     ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler= (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }


  togglePersonsHandler =() => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow});
  }

  render() {

    
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
          </div>
      );
      btnClass=classes.Red;
    }

    // let classes = ['red','bold'].join(' '); // "red bold"
    const  assignedClasses = [];
    if (this.state.persons.length<=2)
    {
      assignedClasses.push(classes.red); //classes  = ['red']
    }
    if (this.state.persons.length<=1)
    {
      assignedClasses.push(classes.bold); //classes  = ['bold']
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className= {assignedClasses.join(' ')}>This really works! </p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>

    );
  }
}

export default App;