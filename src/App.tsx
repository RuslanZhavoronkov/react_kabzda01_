import React from "react";
import "./App.css";
import Accordion from "./components/Acoordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/Rating/Rating";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";

/*function hello() {
  debugger;
  alert("Hello IT-KAMASUTRA");
}*/
//hello();

function App() {
  // полезное что-то
  console.log("App rendered");
  //обязана вернуть JSX
  return (
    <div>
      <OnOff />
      <OnOff />
      <OnOff />
      <OnOff />
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledAccordion titleValue={"Users"} />


      {/* <OnOff on={true} />
      <OnOff on={false} /> */}

      {/* <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      Article 3 */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("AppTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
