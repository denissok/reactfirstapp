import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Cockpit.css';

const cockpit  = (props) => {
    const  assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass=[classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length<=2)
    {
        assignedClasses.push(classes.red); 
    }
    if (props.persons.length<=1)
    {
        assignedClasses.push(classes.bold); 
    }
    
    return (
        <Aux>
            <h1>Hi, I'm a React App</h1>
            <p className= {assignedClasses.join(' ')}>This really works! </p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
}

export default cockpit;