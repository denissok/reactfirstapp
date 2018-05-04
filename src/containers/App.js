import React, { PureComponent } from 'react';
import logo from '../assets/logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';

export const AuthContext = React.createContext(false);


class App extends PureComponent {
  constructor (props){
    super(props);
    console.log('[App.js] inside constructor', props);
  }
  
  componentWillMount(){
    console.log('[App.js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE  App.js] inside shouldComponentUpdate',nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE  App.js] inside componentWillUpdate',nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE  App.js] inside componentDidUpdate');
  }
  
  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('[UPDATE  App.js] inside getDerivedStateFromProps',nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate ()
  {
    console.log('[UPDATE  App.js] inside getSnapshotBeforeUpdate');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState ((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
    }});
  }

  loginHandler = () =>{
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] inside render');

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
          persons ={this.state.persons}
          clicked ={this.deletePersonHandler}
          changed= {this.nameChangedHandler}
        /> ;
     }

    return (
      <Aux>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
        showPersons = {this.state.showPersons}
        persons = {this.state.persons}
        login = {this.loginHandler}
        clicked = {this.togglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,classes.App);