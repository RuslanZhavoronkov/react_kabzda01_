import React from "react";

type OnOffPropsType = {
value: boolean

}

export function OnOff (props:OnOffPropsType) {
    return(
        {props.value <div><ButtonOn/> <ButtonOff/> <InputStyle/> </div> }
    )
}


function ButtonOn () {
    return <button>On</button>
}

function ButtonOff () {
    return <button>Off</button>
}

function InputStyle () {
    return <input type = "radio" />
}