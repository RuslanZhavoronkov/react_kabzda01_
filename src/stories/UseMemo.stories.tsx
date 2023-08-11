import React from "react"
import { useState, ChangeEvent, useMemo } from "react"


export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    const onChangeHandlerA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(Number(e.currentTarget.value))
    }

    const onChangeHandlerB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    //let resultA = 1
    let resultB = 1


    let resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={onChangeHandlerA} />
            <input value={b} onChange={onChangeHandlerB} />
            <hr />
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>

    )
}


   
    
    
    //Создадим две компоненты для демонстрации React Memo:
    
    //1
    // type PropsTypeCount = {
    //     counter: number
    // }
    
    // const NewMessagesCounterSecret: React.FC<PropsTypeCount> = (props) => {
    //     console.log("Counter")
    //     return <div>{props.counter}</div>
    // }
    
   // const NewMessagesCounter = React.memo(NewMessagesCounterSecret)
    
    
    //2
    type PropsUsersType = {
         users: string[]
     }
    
    const UsersSecret: React.FC<PropsUsersType> = (props) => {
        console.log("Users Secret")
        return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
    }
    
    const Users = React.memo(UsersSecret)
    
    
    export const HelpsToReactMemo = () => {
        console.log("HelpsToReactMemo")
        const [counter, setCounter] = useState<number>(0)
        let [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem'])
    
        const onClickButtonHandler = () => {
            setCounter(counter + 1);
        }
        
        const addUser = ()=>{
            setUsers([...users, 'Sveta'])
        }
    
    const newArray = useMemo(() => {
        return users.filter(el => el.toLocaleLowerCase().indexOf('a') > -1);
    }, [users])
        return (
            <>
                <button onClick = {onClickButtonHandler}>+</button>
                <button onClick = {addUser}>+user</button>
                {counter}
                <Users users={newArray} />
            </>
    
        )
    }
