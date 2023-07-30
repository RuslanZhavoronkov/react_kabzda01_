import React, { ChangeEvent, useState} from "react"



export default {
    title: 'input'
    
}

//-------------------------------------------------------------------------------------------------------------------------
export const UncontrolledInput = () => <input />

export const TrackValueUncontrolledInput  = () => {
const[value, setValue]=useState('')

const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
}
    return (
        <>
         <input value = {value} onChange={onChangeHandler}/> - {value}
        </>
       
    )
}

//----------------------------------------------------------------------------------------------------------------------------

export const GetValueUncontrolledInputByButtonPress  = () => {
    const[value, setValue]=useState('')
    
    const onClickHandler = () => {
        const el = document.getElementById('inputId') as HTMLInputElement;
        setValue(el.value)
    }

        return (
            <>
             <input id={'inputId'}/> <button onClick={onClickHandler}>save</button> actual value - {value}
            </>
           
        )
    }
    
    //----------------------------------------------------------------------------------------------------------------------------------------







export const ControlledInputWithFixedValue = () => <input value={'incubator.by'}/>



