import React from "react";
import "./App.css";
import Accordion from "./components/Acoordion/Accordion";
import { Rating } from "./components/Rating/Rating";

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

export default App;
