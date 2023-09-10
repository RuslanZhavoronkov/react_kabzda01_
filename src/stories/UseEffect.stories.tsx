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


export const SetTimeoutExample = () => {

    // const initValue = useMemo(()=>generateData(), []) 
    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(1)

    console.log('SetTimeoutExample')

    const onClickButtonHandlerCounter = () => {
        setCounter(counter + 1);
    }

    const onClickButtonHandlerFake = () => {
        setFake(fake + 1);
    }

    useEffect(() => {
       
        setInterval(()=> {
            console.log('tick :' + counter)
            setCounter((state)=>state + 1);
            }, 2000)

    },[])

    




    return (
        <>
            Hello, counter: {counter}  - fake: {fake}
            {/* <button onClick={onClickButtonHandlerCounter}>+counter</button>
            <button onClick={onClickButtonHandlerFake}>+fake</button> */}
        </>

    )
}









export const SetWatchExample = () => {
    
    function generateWatch () {
        return new Date();
    }

    type watchType = ReturnType<typeof generateWatch>
    const [watch, setWatch] = useState<watchType>(generateWatch)
    

    // console.log('SetTimeoutExample')

let hours = watch.getHours()
let minutes = watch.getMinutes();
let seconds = watch.getSeconds();   

   
useEffect (()=> {
    console.log("One RAZIK")
setInterval(()=> {
    console.log("SETINTERVAL")
    setWatch(()=>new Date())

}, 1000)
}, 
[])


    return (
        <>

        
            {hours} : {minutes} : {seconds}
            {/* <button onClick={onClickButtonHandlerCounter}>+counter</button>
            <button onClick={onClickButtonHandlerFake}>+fake</button> */}
        </>

    )
}
