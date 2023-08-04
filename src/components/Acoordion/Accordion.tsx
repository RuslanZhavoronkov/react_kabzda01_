import React from "react";
import { MouseEvent } from "react"

export type ItemType = {
  title: string
  value: any
}


export type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
};

export const AccordionSecret = (props: AccordionPropsType) => {
  console.log("Accordion rendering");

  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  );
}

export const Accordion = React.memo(AccordionSecret)


type AccordionTitlePropsType = {
  title: string;
  onChange: () => void,

};

function AccordionTitleSecret(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={props.onChange}>--{props.title}--</h3>;
}

const AccordionTitle = React.memo(AccordionTitleSecret)


export type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
};


const AccordionBodySecret: React.FC<AccordionBodyPropsType> = (props) => {

  const onClickNameHandler = (value: any) => {
    props.onClick(value)
  }
  return (

    <ul>
      {props.items.map((el, index) => <li onClick={() => onClickNameHandler(el.value)} key={index}>{el.title}</li>)}
    </ul>

  );
}

const AccordionBody = React.memo(AccordionBodySecret)