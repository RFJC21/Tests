import React, { Component } from "react";
import UserInput from "../components/UserInput/UserInput";
import UserOutput from "../components/UserOutput/UserOutput";
import classes from "./Main.css";
import Validation from "../components/Validation/Validation";
import CounterOutput from "../components/counter/CounterOutput/CounterOutput";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import exercicio_1 from "../assets/images/exercicio_1.png";
import Aux from "../hoc/Aux";

//this is my container

class Main extends Component {
  state = {
    newUserName: "SuperRui",
    updatedUserName: "",
    counter: 0,
    show_exercise_1: false
  };

  //methods
  //exercise 1
  changeNameHandler = event => {
    this.setState({ newUserName: event.target.value });
  };

  //exercise 2
  updateUsernameHandler = event => {
    this.setState({ updatedUserName: event.target.value });
  };

  //add and subtract to the counter
  counterChangeHandler = event => {
    switch (event) {
      case "add1":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "sub1":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add5":
        this.setState(prevState => {
          return { counter: prevState.counter + 5 };
        });
        break;
      case "sub5":
        this.setState(prevState => {
          return { counter: prevState.counter - 5 };
        });
        break;
    }
  };

  //reset button
  counterResetHandler = () => {
    this.setState({ counter: 0 });
  };

  //modal
  showExerciseHandler = () => {
    this.setState({ show_exercise_1: true });
  };

  render() {
    return (
      <div className={classes.All}>
        <header className={classes.Header}>
          Exercise 1
          <Button clicked={this.showExerciseHandler}>Show exercise</Button>
        </header>
        <Aux>
          <Modal show={this.state.show_exercise_1}>
            <img src={exercicio_1} />
          </Modal>
        </Aux>
        <UserOutput username="Rui" />
        <UserInput
          changeName={this.changeNameHandler}
          currentName={this.state.newUserName}
        />
        <UserOutput username={this.state.newUserName} />
        <header className={classes.Header}>Exercise 2</header>
        <input
          className={classes.Input_Main}
          type="text"
          onChange={this.updateUsernameHandler}
          text={this.state.updatedUserName}
        />
        <p className={classes.Output_Main}>{this.state.updatedUserName}</p>
        <Validation inputLength={this.state.updatedUserName.length} />
        <CounterOutput count={this.state.counter} />
        <Button clicked={() => this.counterChangeHandler("add1")}>Add 1</Button>
        <Button clicked={() => this.counterChangeHandler("add5")}>Add 5</Button>
        <Button clicked={() => this.counterChangeHandler("sub1")}>
          Subtract 1
        </Button>
        <Button clicked={() => this.counterChangeHandler("sub5")}>
          Subtract 5
        </Button>
        <Button clicked={this.counterResetHandler}>Reset</Button>
        {/*another way to display the count*
        <h1>{this.state.counter}</h1>*/}
      </div>
    );
  }
}

export default Main;
