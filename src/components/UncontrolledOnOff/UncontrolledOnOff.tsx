import React, { useState } from "react";

type PropsType = {
  onChange:(on:boolean)=> void
  defaultOn?: boolean
};

export const UncontrolledOnOffSecret = (props: PropsType) => {

    
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
     
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    padding: "2px",
    backgroundColor: on ? "green" : "white", //если нажата
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    marginLeft: "2px", //отступ слева
    padding: "2px",
    backgroundColor: on ? "white" : "red", //если нажата
  };

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block", //строится в линию слева-направо(block-чтобы размеры фиксировались)
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red", //красная или зеленая в зависимости от того какая кнопка нажата
  };

const onClicked = () => {
  setOn(true)
  props.onChange(true)
  }
  
const offClicked = () => {
  setOn(false)
  props.onChange(false)
}

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
}


export const UncontrolledOnOff = React.memo(UncontrolledOnOffSecret)