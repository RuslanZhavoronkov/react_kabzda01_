import React from "react";
import "./App.css";

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
    </>
  );
}

function Star() {
  console.log("Star rendering");
  return <div>star</div>;
}

function Accordion() {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle() {
  return <h3>Меню</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default App;
