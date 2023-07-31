import React, { ChangeEvent, useRef, useState } from "react"



export default {
    title: 'input'

}

//-------------------------------------------------------------------------------------------------------------------------
export const UncontrolledInput = () => <input />

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
            <input value={value} onChange={onChangeHandler} /> - {value}
        </>

    )
}

//----------------------------------------------------------------------------------------------------------------------------

export const GetValueUncontrolledInputByButtonPress = () => {
const[value, setValue] = useState('') //хук вводимое инпутом сообщение
const inputRef = useRef<HTMLInputElement>(null) //хук хранящий ссылку на элемент

const onClickHandler = () => {
    const el = inputRef.current as HTMLInputElement //достали из хранилища useRef элемент
    setValue(el.value)

}


    return (
        <>
        <input ref={inputRef}/><button onClick={onClickHandler}>save</button> ---{value}
        </>
    )
}

//----------------------------------------------------------------------------------------------------------------------------------------







export const ControlledInputWithFixedValue = () => <input value={'incubator.by'} />



