import { createStore } from "@reduxjs/toolkit"

const INCREMENT ='INCREMENT'
const DECREMENT ='DECREMENT'
const RESET ='RESET'

const initialState ={
    count : 0,
}

const incrementCount =()=> {
    type:INCREMENT
}
const decrementCount = ()=>{ 
    type:DECREMENT
}
const resetCount =()=>{
    type : RESET
}

const counter =(state,action)=>{
    switch(action.type){
        case INCREMENT :
           return {
            ...state,
            count:state.count+1,
           }

        case DECREMENT :
        return{...state,
        count:state.count-1,}
        case RESET :
            return{...state,
            count:0}

        default:
            state
    }
}

const store = createStore(counter)
store.subscribe(
    console.log(store.getState())
)

store.dispatch(incrementCount())


