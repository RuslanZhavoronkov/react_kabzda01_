import React, { useCallback, useEffect } from "react"
import { useState, ChangeEvent, useMemo } from "react"


export default {
    title: 'useEffect demo'
}



export const SimpleExample = () => {

    // const initValue = useMemo(()=>generateData(), []) 
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    console.log('SimpleExample')

    const onClickButtonHandlerCounter = () => {
        setCounter(counter + 1);
    }

    const onClickButtonHandlerFake = () => {
        setCounter(fake + 1);
    }

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })


    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    },[])


    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])



    return (
        <>
            Hello,  {counter}
            <button onClick={onClickButtonHandlerCounter}>+counter</button>
            <button onClick={onClickButtonHandlerFake}>+fake</button>
        </>

    )
}




