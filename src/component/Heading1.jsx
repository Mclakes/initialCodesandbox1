import React from "react";

const date = new Date();
const currentTime = date.getHours();
console.log(currentTime);

let greeting;

const timeStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  timeStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  timeStyle.color = "green";
} else {
  greeting = "Good Evening";
  timeStyle.color = "blue";
}

function Heading1() {
  return (
    <h1 className="heading" style={timeStyle}>
      {" "}
      {greeting}{" "}
    </h1>
  );
}

export default Heading1;
