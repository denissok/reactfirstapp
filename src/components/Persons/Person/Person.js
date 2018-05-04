import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import './Person.css';
import withClass from '../../../hoc/WithClass';
import {AuthContext} from '../../../containers/App';



class Person extends Component {
    constructor (props){
        super(props);
        console.log('[Person.js] inside constructor', props);
        this.inputElement = React.createRef();
      }
      
      componentWillMount(){
        console.log('[Person.js] inside componentWillMount');
      }
      componentDidMount(){
        console.log('[Person.js] inside componentDidMount');
        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }   
      }
      focus()
      {
          this.inputElement.current.focus();
      }
    render (){
        console.log('[Person.js] inside render');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ?<p>I'm authenticated</p>: null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I am a person and I am  {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                ref ={this.inputElement}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);