
import { action } from "@storybook/addon-actions/package.json"
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
    const [value, setValue] = useState('') //хук вводимое инпутом сообщение
    const inputRef = useRef<HTMLInputElement>(null) //хук хранящий ссылку на элемент

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement //достали из хранилища useRef элемент
        setValue(el.value)

    }


    return (
        <>
            <input ref={inputRef} /><button onClick={onClickHandler}>save</button> ---{value}
        </>
    )
}

//----------------------------------------------------------------------------------------------------------------------------------------

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    debugger;

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    }

    return (
        <>
            <input value={parentValue} onChange={onChangeInputHandler} />
        </>
    )
}

//-----------------------------------------------------------------------------------------------------------------------------------------


export const ControlledInputCheckbox = () => {
    const [check, setChecked] = useState<boolean>(true)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }
    return (
        <input type={"checkbox"} checked={check} onChange={onChangeInputHandler} />
    )
}


//-----------------------------------------------------------------------------------------------------------------------------------------------

export const ControlledSelect = () => {
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const onChangeSelectValue = (e:ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.currentTarget.value)
    }

    return (
        <select value={selectValue} onChange={onChangeSelectValue}>
            <option>none</option>
            <option value={'1'}>Tver</option>
            <option value={'2'}>Tomsk</option>
            <option value={'3'}>Arhangelsk</option>
            <option value={'4'}>Minsk</option>
        </select>

    )
}






export const ControlledInputWithFixedValue = () => <input value={'incubator.by'} />



