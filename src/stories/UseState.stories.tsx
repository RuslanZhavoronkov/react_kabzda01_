import React, { useCallback } from "react"
import { useState, ChangeEvent, useMemo } from "react"


export default {
    title: 'useState demo'
}

function generateData (){
    console.log('generate Data')

    return 3333333333
}

export const Example1 = () => {
    console.log('Example 1')
    const change = (state:number)=> {
        console.log('function change')
        return state + 1
    }
   // const initValue = useMemo(()=>generateData(), []) 
    const [counter, setCounter] = useState<number>(generateData)
    const onClickButtonHandler = () => {
        setCounter(change);
    }
    return (
        <>
            <button onClick = {onClickButtonHandler}>+</button>  {counter}
        </>

    )
}




