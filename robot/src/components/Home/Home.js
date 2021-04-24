import React, { Component } from "react";
import * as Direction from './Variables';

const regex = {
  PLACE: /^PLACE\s+[1-5]+\s*,\s*[1-5]+\s*,\s*(WEST||NORTH||EAST||SOUTH)$/,
};

class Home extends Component {
  state = {
    X: 0,
    Y: 0,
    F: null,
    isPlace: false,
  };

  handEnterKey = (event) => {
    let userInput = event.target.value;
    let getCoordination;
    // let isRobotOnBoard = false;
    //let regex = /^PLACE\s+\d+\s*,\s*\d+\s*,\s*(WEST||NORTH||EAST||SOUTH)$/;

    if (userInput.match(regex.PLACE) && event.key === "Enter") {
      getCoordination = userInput.split(/[ ,]+/);
      this.storeRobotPosition(getCoordination);
      this.setState({ isPlace: true });
    } else if (
      event.key === "Enter" &&
      !this.state.isPlace
    ) {
      alert("Please place the Robot down to use the other commands.");
    }

    if (this.state.isPlace && event.key === "Enter") {
      this.placeRobotDown(getCoordination, userInput);
    }

    // if (!this.state.isPlace) {
    //   // Check if rebot is placed on board
    //   if (userInput.match(regex) && event.key === "Enter") {
    //     getCoordination = userInput.split(/[ ,]+/);
    //     this.storeRobotPosition(getCoordination);
    //     this.setState({ isPlace: true });
    //   } else if (!userInput.match(regex) && event.key === "Enter") {
    //     alert("Please place the Robot down to use other command.");
    //   }
    // } else {
    //   this.placeRobotDown(getCoordination, userInput);
    // }
  };

  placeRobotDown(pos, userInput) {
    let updatedPos = {
      ...this.state,
    };

    switch (userInput) {
      case "LEFT":
        this.moveLeft(updatedPos);
        break;
      case "RIGHT":
        this.moveRight(updatedPos);
        break;
      case "MOVE":
        this.moveSets(updatedPos);
        break;
      default:
        console.log("hey");
    }
  }

  moveLeft(updatedPos) {
    switch (this.state.F) {
      case Direction.NORTH:
        updatedPos = Direction.WEST;
        this.setState({ F: updatedPos });
        break;
      case Direction.EAST:
        updatedPos = Direction.NORTH;
        this.setState({ F: updatedPos });
        break;
      case Direction.SOUTH:
        updatedPos = Direction.EAST;
        this.setState({ F: updatedPos });
        break;
      case Direction.WEST:
        updatedPos = Direction.SOUTH;
        this.setState({ F: updatedPos });
        break;
      default:
        console.log("nothing");
    }
  }

  moveRight(updatedPos) {
    switch (this.state.F) {
      case Direction.NORTH:
        updatedPos = Direction.EAST;
        this.setState({ F: updatedPos });
        break;
      case Direction.EAST:
        updatedPos = Direction.SOUTH;
        this.setState({ F: updatedPos });
        break;
      case Direction.SOUTH:
        updatedPos = Direction.WEST;
        this.setState({ F: updatedPos });
        break;
      case Direction.WEST:
        updatedPos = Direction.NORTH;
        this.setState({ F: updatedPos });
        break;
      default:
        console.log("nothing");
    }
  }

  moveSets(updatedPos) {
    switch (this.state.F) {
      case Direction.NORTH:
        updatedPos = this.state.X + 1;
        this.setState({ X: updatedPos });
        break;
      case Direction.EAST:
        updatedPos = this.state.Y + 1;
        this.setState({ Y: updatedPos });
        break;
      case Direction.SOUTH:
        updatedPos = this.state.X - 1;
        this.setState({ X: updatedPos });
        break;
      case Direction.WEST:
        updatedPos = this.state.Y - 1;
        this.setState({ Y: updatedPos });
        break;
      default:
        console.log("nothing");
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
        <input
          placeholder="PLACE ..."
          onKeyPress={this.handEnterKey}
          //   value="PLACE 0,2,NORTH"
        />
        <input type="Button" value="test" onClick={this.test} />
      </div>
    );
  }
}

export default Home;
