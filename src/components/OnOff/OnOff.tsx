import React, { useState } from "react";

type PropsType = {
  on: boolean;
  onChange: (on:boolean) => void
};

export const OnOffSecret = (props: PropsType)=> {

    console.log("on:" + props.on)
//  let [on, setOn] = useState(false);
     
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    padding: "2px",
    backgroundColor: props.on ? "green" : "white", //если нажата
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    marginLeft: "2px", //отступ слева
    padding: "2px",
    backgroundColor: props.on ? "white" : "red", //если нажата
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red", //красная или зеленая в зависимости от того какая кнопка нажата
  };

  return (
    <div>
      <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
      <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
}

export const OnOff = React.memo(OnOffSecret)