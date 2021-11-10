import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      {
        id: "asdksk",
        name: "ali",
      },
      { id: "qkqjwke", name: "kamel" },
    ],
  };
  changeNameHandler = (event, id) => {
    const perosnIndex = this.state.persons.findIndex((p) => p.id === id);
    // const perosn = { ...this.state.persons[perosnIndex] };
    // perosn.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[perosnIndex] = perosn;
    const persons = [...this.state.persons];
    persons[perosnIndex].name = event.target.value;
    this.setState({ persons });
  };
  deletePerosnHandler = (index) => {
    const perosns = this.state.persons;
    perosns.splice(index, 1);
    this.setState({ perosns });
  };
  render() {
    const style = {
      backgroundColor: "red",
      ":hover": {
        color: "white",
      },
    };
    let perosns =
      this.state.persons.length !== 0 ? (
        this.state.persons.map((perosn, index) => {
          return (
            <Person
              name={perosn.name}
              click={this.deletePerosnHandler.bind(this, index)}
              key={perosn.id}
              change={(event) => this.changeNameHandler(event, perosn.id)}
            />
          );
        })
      ) : (
        <h3>no persons yet</h3>
      );
    return (
      <StyleRoot>
        <div className="App">
          {perosns}
          <h1 style={style}>helo im mahmoud</h1>
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
