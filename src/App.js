import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import React, { useState } from 'react';
import Person from './Person/Person.js';
import './Person/Person.css';
import Radium , {StyleRoot} from 'radium';

class App extends Component
{
//const App = props => {
//const [personStates, setPersonStates] = useState ({
//persons : [
//{ name: "Manu" , age: 23 },
//{ name: "Max" , age: 28 },
//{ name: "Neel" , age: 22 }
//],
//otherstate : "Some other states"
//});

state = {
persons : [
{ id: "abc1" , name: "Manu" , age: 23 },
{ id: "abc2" , name: "Max" , age: 28 },
{ id: "abc3" , name: "Neel" , age: 22 }
],
otherState : "Some other states",
showPersons: false
};
//const switchNameHandler = () =>{
//setPersonStates({
//persons : [
//{ name: "Maushi" , age: 23 },
//{ name: "Max" , age: 28 },
//{ name: "Neel" , age: 21 }
//]
//
//});
//}

togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
};

nameChangeHandler = (event,id)=>{
const personIndex = this.state.persons.findIndex(p =>{
return p.id === id
});
const person = {
...this.state.persons[personIndex]
};

person.name = event.target.value;
const persons = [...this.state.persons];
person[personIndex] = person;

this.setState({
persons : [
{ id: "abc1", name: "Manu" , age: 23 },
{ id: "abc2",name: event.target.value , age: 28 },
{ id: "abc3" ,name: "Neel" , age: 22 }
]
}
);
}

switchNameHandler = () =>
{
//console.log("Switch Clicked");
//DONT DO THIS: this.state.persons[0].name = "Silvasa";
this.setState({
persons : [
{ name: "Abc" , age: 23 },
{ name: "Max" , age: 28 },
{ name: "Neel" , age: 22 }
]
})
};

deletePersonHandler = (personIndex) =>
{
const persons = this.state.persons.slice();
persons.splice(personIndex,1);
this.setState({persons : persons});
}

render(){
const style = {
backgroundColor : 'green',
color : 'white',
font : 'inherit',
border : '1px solid blue',
padding : '8px',
cursor : 'pointer',
':hover': {
backgroundColor : 'lightgreen',
color : 'black',
}
};

let persons = null;
if (this.state.showPersons)
{
persons = (
    <div>
    {this.state.persons.map((person,index) => {
    return <Person
    click = {() => this.deletePersonHandler(index)}
    name={person.name}
    age ={person.age}
    key ={person.id}
    changed={(event)=>this.nameChangeHandler(event,person.id)}/>
    })}
    </div>
);
style.backgroundColor='red';
style[':hover'] = {
backgroundColor : 'salmon',
color : 'black',
}
}

const classes = [];
if (this.state.persons.length <=2)
{
classes.push('red');
}
if (this.state.persons.length <=1)
{
classes.push('bold');
}


  return (
  <StyleRoot>
    <div className="App">
      <h1>Hii Im react Developer</h1>
      <p className = {classes.join(' ')}> This is really working </p>
      <button style= {style} onClick={this.togglePersonsHandler}> Switch Name</button>
      {persons}
    </div>
    </StyleRoot>
  );
//React.createElement is used to inject something
//return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Im React Developer'))

}
}
export default Radium(App);
// state is a property for class that extends component , state can have anything
// useState hook of react used instead of state prop of component
//      <Person name={this.state.persons[0].name} age ={this.state.persons[0].age} />
//      <Person name={this.state.persons[1].name} age ={this.state.persons[1].age} click = {this.switchNameHandler.bind(this,"Max")} changed = {this.nameChangeHandler}>My Hobbies: Racing</Person>
//      <Person name={this.state.persons[2].name} age ={this.state.persons[2].age} />
// radium for inline hover properties and media query