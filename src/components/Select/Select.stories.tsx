import { useState } from "react";
import { Select } from "./Select";
import React from "react";

export default {
    title: 'Accordion',
    component: Select
}

export const WithValueSecret = () => {
    const [value, setValue] = useState<any>('1')

    const onChangeHandler = (newValue: any) => setValue(newValue)

    return (
        <>
            <Select value={value} onChange={onChangeHandler}
                items={[
                    { value: '1', title: 'Minsk' },
                    { value: '2', title: 'Moscow' },
                    { value: '3', title: 'Kiev' },
                ]} />
        </>
    )
}


export const WithValue = React.memo(WithValueSecret)

export const WithoutValueSecret = () => {
    const [value, setValue] = useState<any>(null)
    const onChangeHandler = (newValue: string) => setValue(newValue)

    return (
        <>
            <Select onChange={onChangeHandler}
                value={value}
                items={[
                    { value: '1', title: 'Minsk' },
                    { value: '2', title: 'Moscow' },
                    { value: '3', title: 'Kiev' },
                ]} />
        </>
    )

}

export const WithoutValue = React.memo(WithoutValueSecret)











