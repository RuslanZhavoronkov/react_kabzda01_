import React, { useState } from "react";

type UncontrolledAccordionPropsType = {
  titleValue: string;
  //collapsed: boolean;
};

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
  console.log("Accordion rendering");

  let [collapsed, setCollapsed] = useState(true);

  // const onClickHandler = () => {
  //   collapsed ? setCollapsed(false) : setCollapsed(true);
  // };

  return (
    <div>
      <AccordionTitle title={props.titleValue}  onClick = {() => setCollapsed(!collapsed)} />
      {/* <button onClick={onClickHandler}>TOGGEL</button> */}
      {!collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: () => void
  
};

function AccordionTitle(props: AccordionTitlePropsType) {
  
  return <h3 onClick = {()=>props.onClick()}>--{props.title}--</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
