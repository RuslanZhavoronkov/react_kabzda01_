
import { StateType, TOGGLE_CONSTANT, reducerNew } from "./reduser"


test ('collapsed shoulbe true', () => {


//Данные(data)
const state : StateType = {
    collapsed: false
}

//Действия(action)
const newState = reducerNew(state,{type: TOGGLE_CONSTANT})


//Ожидания(expectation)
expect(newState.collapsed).toBe(true)



})


test ('collapsed shoulbe false', () => {


    //Данные(data)
    const state : StateType = {
        collapsed: true
    }
    
    //Действия(action)
    const newState = reducerNew(state,{type: TOGGLE_CONSTANT})
    
    
    //Ожидания(expectation)
    expect(newState.collapsed).toBe(false)
    
    
    
    })


    test ('dispatch crazy actions', () => {


        //Данные(data)
        const state : StateType = {
            collapsed: true
        }
        
        
        
        
        //Ожидания(expectation)
        expect(()=> {reducerNew(state,{type: "Bad boy"})}).toThrowError()})