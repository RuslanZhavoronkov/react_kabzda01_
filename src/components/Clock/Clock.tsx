import { useEffect, useState } from "react"
import { AnalogClockView } from "./AnalogClockView"
import { DigitalClockView } from "./DigitalClockView"

type PropsType = {
    mode?: 'digital' | 'analog'
}



export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('TIC')
            setDate(() => new Date())
        }, 1000)

        return () => clearInterval(intervalID)

    }, [])

    let View;

    switch (props.mode) {
        case "analog":
            View = <AnalogClockView date = {date}/>
            break;
        case 'digital':
        default:
            View = <DigitalClockView date = {date}/>
           

    }


    return (

        <div>
            {View}
        </div>
    )
}




export type ClockViewPropsType = {
    date: Date
}




