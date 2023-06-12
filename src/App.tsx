import React from "react";
import "./App.css";
import Accordion from "./components/Acoordion/Accordion";

/*function hello() {
  debugger;
  alert("Hello IT-KAMASUTRA");
}*/
//hello();

function App() {
  // полезное что-то
  console.log("App rendering");
  //обязана вернуть JSX
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function AppTitle() {
  console.log("AppTitle rendering");
  return <>This is APP component</>;
}

function Rating() {
  console.log("Rating rendering");
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  console.log("Star rendering");
  return <div>star</div>;
}

export default App;
