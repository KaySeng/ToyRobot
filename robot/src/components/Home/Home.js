import React, { Component } from "react";

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
    let regex = /^PLACE\s+\d+\s*,\s*\d+\s*,\s*(WEST||NORTH||EAST||SOUTH)$/;

    if (userInput.match(regex) && event.key === "Enter") {
      getCoordination = userInput.split(/[ ,]+/);
      this.storeRobotPosition(getCoordination);
      this.setState({ isPlace: true });
    } else if (!userInput.match(regex) && event.key === "Enter" && !this.state.isPlace) {
      alert("Please place the Robot down to use other command.");
    } 

    if (this.state.isPlace) {
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
    if (userInput === "MOVE") {
      switch (this.state.F) {
        case "NORTH":
          updatedPos = this.state.X + 1;
          this.setState({ X: updatedPos });
          break;
        case "EAST":
          updatedPos = this.state.Y + 1;
          this.setState({ Y: updatedPos });
          break;
        // case "SOUTH":
        //   const oldPos = this.state.X;
        //   const newPos = parseInt(oldPos - 1);
        //   this.setState({ X: newPos });
        //   break;
        // case "WEST":
        //   const oldPos = this.state.Y;
        //   const newPos = parseInt(oldPos - 1);
        //   this.setState({ X: newPos });
        //   break;
        default:
          console.log("nothing");
      }
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
