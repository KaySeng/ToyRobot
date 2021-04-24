import React, { Component } from "react";

class Home extends Component {
  state = {
    X: null,
    Y: null,
    F: null,
    isPlace: false,
  };

  handEnterKey = (event) => {
    let userInput = event.target.value;
    let getCoordination;
    // let isRobotOnBoard = false;
    let regex = /^PLACE\s+\d+\s*,\s*\d+\s*,\s*(WEST||NORTH||EAST||SOUTH)$/;

    if (!this.state.isPlace) {
      // Check if rebot is placed on board
      if (userInput.match(regex) && event.key === "Enter") {
        getCoordination = userInput.split(/[ ,]+/);
        this.storeRobotPosition(getCoordination);
        this.setState({ isPlace: true });
      } else if (!userInput.match(regex) && event.key === "Enter") {
        alert("Please place the Robot down to use other command.");
      }
    } else {
      this.placeRobotDown(getCoordination, userInput);
    }
  };

  placeRobotDown(pos, userInput) {
    if (userInput === "hello") {
      console.log(userInput);
    }
  }

  storeRobotPosition(pos) {
    this.setState({
      X: pos[1],
      Y: pos[2],
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
