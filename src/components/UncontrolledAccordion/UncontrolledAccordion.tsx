import React, { useReducer, useState } from "react";
import { TOGGLE_CONSTANT, reducerNew } from "./reduser";

type UncontrolledAccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};



export const UncontrolledAccordionSecret = (props: UncontrolledAccordionPropsType) => {
  console.log("Accordion rendering");

  // let [collapsed, setCollapsed] = useState(true);
  let [state, dispatch] = useReducer(reducerNew, {collapsed: false});

  // const onClickHandler = () => {
  //   collapsed ? setCollapsed(false) : setCollapsed(true);
  // };

  return (
    <div>

      {/* <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} /> */}
      {/* <button onClick={onClickHandler}>TOGGEL</button> */}
      <AccordionTitle title={props.titleValue} onClick={() => dispatch({ type: TOGGLE_CONSTANT })} />
      {state.collapsed && <AccordionBody />}
    </div>
  );
}


export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void

};

const AccordionTitleSecret = (props: AccordionTitlePropsType) => {

  return <h3 onClick={() => props.onClick()}>--{props.title}--</h3>;
}

const AccordionTitle = React.memo(AccordionTitleSecret)


const AccordionBodySecret = () => {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
function reducer() {
  throw new Error("Function not implemented.");
}


const AccordionBody = React.memo(AccordionBodySecret)
