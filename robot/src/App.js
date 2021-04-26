import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <h1>TOY ROBOT</h1>
      <h3>INSTRUCTIONS:</h3>
      <ol>
        <li>Please use this command to place toy robot on the table. [PLACE X,Y,F]. <i style={{color: "red"}}>cannot be greater than 5</i></li>
        <br/>
        <li>MOVE - will move the toy robot one unit forward in the direction it is currently facing</li>
        <li>LEFT - will rotate the robot 90 degrees to the left without changing the position of the robot</li>
        <li>RIGHT - will rotate the robot 90 degrees to the right without changing the position of the robot</li>
        <li>REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient</li>
      </ol>
      <p>Use the textbox below and use Enter key to issue command</p>
      <Home />
    </div>
  );
}

export default App;
