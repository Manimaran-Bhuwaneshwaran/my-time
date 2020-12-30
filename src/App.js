import React from "react";
import "./styles.css";
const time = new Date().getHours();
const color = {};
var greeting;
if (time < 12 && time > 0) {
  greeting = "Good Morning";
  color.color = "red";
} else if (time > 12 && time < 18) {
  greeting = "Good After Noon";
  color.color = "green";
} else {
  greeting = "Good Night";
  color.color = "blue";
}
setInterval(() => {
  document.getElementById("time").innerHTML =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
}, 1000);
export default function App() {
  return (
    <div className="App">
      <h1 className="head" style={color}>
        {greeting} Manimaran
      </h1>
      <p className="head" id="time" style={{ fontSize: "50px" }}></p>
    </div>
  );
}
