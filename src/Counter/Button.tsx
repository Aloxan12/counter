import React from 'react';
import './Counter.css';



type ButtonType = {
    title: string
    disabled: boolean
    onClick:()=>void
}
function Button(props: ButtonType) {

    return <button disabled={props.disabled} onClick={props.onClick} >{props.title}</button>

}

export default Button;