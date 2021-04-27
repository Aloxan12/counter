import React from 'react';
import './CounterLocalstorage.css';



type ButtonType = {
    title: string
    disabled: boolean
    onClick:()=>void
}
function ButtonLocalstorage(props: ButtonType) {

    return <button disabled={props.disabled} onClick={props.onClick} >{props.title}</button>

}

export default ButtonLocalstorage;