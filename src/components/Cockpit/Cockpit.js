import React from 'react';

import classes from './Cockpit.css'

const cockpit  = (props) => {
    const  assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass=classes.Red;
    }

    if (props.persons.length<=2)
    {
        assignedClasses.push(classes.red); //classes  = ['red']
    }
    if (props.persons.length<=1)
    {
        assignedClasses.push(classes.bold); //classes  = ['bold']
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className= {assignedClasses.join(' ')}>This really works! </p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle persons</button>

        </div>
    );
}

export default cockpit;