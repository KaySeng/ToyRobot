import React, { Component } from "react";
import * as Input from "./Variables";

class Home extends Component {
  // state to contain all robot information
  state = {
    X: 0,
    Y: 0,
    F: null, // NORTH, EAST, SOUTH, WEST
    isPlace: false, // check to see if robot is on board
  };

  handEnterKey = (event) => {
    let userInput = event.target.value;
    let getCoordination;

    //  User input validation, only accept valid command else print out error message.
    if (event.key === "Enter") {
      if (
        !userInput.match(Input.REGEX.PLACE) &&
        !userInput.match(Input.REGEX.MOVE) &&
        !userInput.match(Input.REGEX.LEFT) &&
        !userInput.match(Input.REGEX.RIGHT) &&
        !userInput.match(Input.REGEX.REPORT)
      ) {
        alert("Please enter a valid command");
      }
    }

    if (userInput.match(Input.REGEX.PLACE) && event.key === "Enter") {
      getCoordination = userInput.split(/[ ,]+/);
      this.storeRobotPosition(getCoordination);
      this.setState({ isPlace: true });
    } else if (event.key === "Enter" && !this.state.isPlace) {
      alert("Please place the Robot down to use the other commands.");
    }

    if (this.state.isPlace && event.key === "Enter") {
      this.placeRobotDown(getCoordination, userInput);
    }
  };

  placeRobotDown(pos, userInput) {
    let updatedPos = {
      ...this.state,
    };

    switch (userInput) {
      case "LEFT":
        this.changeDirection(updatedPos, userInput);
        break;
      case "RIGHT":
        this.changeDirection(updatedPos, userInput);
        break;
      case "MOVE":
        this.moveSets(updatedPos);
        break;
      case "REPORT":
        alert(`X: ${updatedPos.X}, Y: ${updatedPos.Y}, F: ${updatedPos.F}`);
        break;
      default:
        console.log("Invalid options");
    }
  }

  // Changing robot direction, only has two possible options, LEFT or RIGHT
  changeDirection(updatedPos, userInput) {
    switch (this.state.F) {
      case Input.NORTH:
        updatedPos = userInput === "LEFT" ? Input.WEST : Input.EAST;
        this.setState({ F: updatedPos });
        break;
      case Input.EAST:
        updatedPos = userInput === "LEFT" ? Input.NORTH : Input.SOUTH;
        this.setState({ F: updatedPos });
        break;
      case Input.SOUTH:
        updatedPos = userInput === "LEFT" ? Input.EAST : Input.WEST;
        this.setState({ F: updatedPos });
        break;
      case Input.WEST:
        updatedPos = userInput === "LEFT" ? Input.SOUTH : Input.NORTH;
        this.setState({ F: updatedPos });
        break;
      default:
        alert("Please enter a valid command");
    }
  }

  moveSets(updatedPos) {
    switch (this.state.F) {
      case Input.NORTH:
        updatedPos = this.state.Y + 1;
        break;
      case Input.EAST:
        updatedPos = this.state.X + 1;
        break;
      case Input.SOUTH:
        updatedPos = this.state.Y - 1;
        break;
      case Input.WEST:
        updatedPos = this.state.X - 1;
        break;
      default:
        console.log("Invalid Direction");
    }
    this.isMoveValid(updatedPos);
  }

  isMoveValid(updatedPos) {
    let robotIsFacing = this.state.F;
    if (updatedPos >= 0 && updatedPos <= 5) {
      if (robotIsFacing === Input.NORTH || robotIsFacing === Input.SOUTH) {
        this.setState({ Y: updatedPos });
      } else if (robotIsFacing === Input.EAST || robotIsFacing === Input.WEST) {
        this.setState({ X: updatedPos });
      }
    } else {
      alert("Invalid move");
    }
  }

  storeRobotPosition(pos) {
    this.setState({
      X: parseInt(pos[1]),
      Y: parseInt(pos[2]),
      F: pos[3],
    });
  }

  test = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input placeholder="PLACE ..." onKeyPress={this.handEnterKey} />
        <input type="Button" value="test" onClick={this.test} />
      </div>
    );
  }
}

export default Home;
