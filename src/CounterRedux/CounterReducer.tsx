import React from "react";

export type incrementCounter = {type: 'INCREMENT_COUNTER'}
export type resetCounter = {type: 'RESET_COUNTER'}
export type setCount = {type: 'SET_COUNT'}
export type setMaxValue = {type: 'SET_MAX_VALUE', value: number}
export type setMinValue = {type: 'SET_MIN_VALUE', value: number}
export type setError = {type: 'SET_ERROR', error: boolean, errorText: errorTextType}
export type setValueFromLocalStorage = {type: 'SET_VALUE_FROM_LOCAL_STORAGE', value: number}

export type ActionType = incrementCounter | resetCounter | setCount | setMaxValue | setMinValue | setError
| setValueFromLocalStorage

export type errorTextType = `enter value and press 'set'` | `enter correct value` | ``
type initialStateType = {
    count:number,
    maxCount:number,
    minCount: number,
    errorText: errorTextType
    error: boolean,
    disableButton: boolean
}
let initialState: initialStateType = {
    count: 0,
    maxCount:5,
    minCount: 0,
    errorText: `enter value and press 'set'`,
    error: true,
    disableButton: true
}


const counterReducer =(state:initialStateType = initialState, action: ActionType)=>{
    switch (action.type){
        case "INCREMENT_COUNTER":{
            return {...state, count: state.count + 1}
        }
        case "RESET_COUNTER":{
            return {...state, count: state.count = state.minCount}
        }
        case "SET_COUNT":{
            return {...state, count: state.minCount}
        }
        case "SET_MAX_VALUE":{
            return {...state,maxCount: action.value}
        }
        case "SET_MIN_VALUE":{
            return {...state,minCount: action.value}
        }
        case "SET_ERROR":{
            return {...state, errorText:action.errorText, error: action.error}
        }
        case "SET_VALUE_FROM_LOCAL_STORAGE":{
            return {...state, count:action.value, minCount: action.value}
        }
    }
}

export const incrementCounterAC = (): incrementCounter => {
    return { type: 'INCREMENT_COUNTER'}
}
export const resetCounterAC = (): resetCounter => {
    return { type: 'RESET_COUNTER'}
}
export const setCountAC = (): setCount => {
    return { type: 'SET_COUNT'}
}
export const setMaxValueAC = (value: number): setMaxValue => {
    return { type: 'SET_MAX_VALUE', value}
}
export const setMinValueAC = (value: number): setMinValue => {
    return { type: 'SET_MIN_VALUE', value}
}
export const setErrorAC = (error: boolean, errorText: errorTextType): setError => {
    return { type: 'SET_ERROR', error, errorText}
}
export const setValueFromLocalStorage = ( value: number): setValueFromLocalStorage => {
    return { type: 'SET_VALUE_FROM_LOCAL_STORAGE', value}
}

