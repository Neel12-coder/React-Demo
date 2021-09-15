import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
//return <p>Im a person and I am {Math.floor(Math.random()*30)} years old!</p>
const style= {
'@media (min-width: 500px)':{
 width : '450px'
}
};
return (
<div className="Person" style = {style}>
<p onClick={props.click}>Im {props.name} and I am {props.age} years old!</p>
<p>{props.children}</p>
<input type="text" onChange = {props.changed} defaultValue = {props.name} />
</div>
)
};

export default Radium(person);

// name of function with small p
// for some dynamic data like Math.random .. add curly braces
// export def comp to import it in app.js
// props.children returns anything in between open and closing tag
// for classes that extends Component .. we use this.props. and for functions directly props.