//Создаем объект историю 

import React from "react"
import { useState } from "react"

export default {
    title: 'React.memo demo'
}


//Создадим две компоненты для демонстрации React Memo:

//1
type PropsTypeCount = {
    counter: number
}

const NewMessagesCounterSecret: React.FC<PropsTypeCount> = (props) => {
    console.log("Counter")
    return <div>{props.counter}</div>
}

const NewMessagesCounter = React.memo(NewMessagesCounterSecret)


//2
type PropsUsersType = {
    users: string[]
}

const UsersSecret: React.FC<PropsUsersType> = (props) => {
    console.log("Users")
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, seUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem'])

    const onClickButtonHandler = () => {
        setCounter(counter + 1);
    }

    const onClickAddUserHandler = () => {
        seUsers([...users, 'Sveta'])
    }


    return (
        <>
            <button onClick = {onClickButtonHandler}>+</button>
            <button onClick = {onClickAddUserHandler}>Add user</button>
            <NewMessagesCounter counter={counter} />
            <Users users={users} />
        </>

    )
}


