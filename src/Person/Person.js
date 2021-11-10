import React from "react";
import "./Person.css";
const Person = (props) => {
  return (
    <div className="Perosn" onClick={props.click}>
      <input type="text" onChange={props.change} />
      <h1>helo im perosn , im {props.name.toUpperCase()}</h1>
      <p>{props.children}</p>
    </div>
  );
};
export default Person;
