import React, {ChangeEvent, useState} from 'react';
import './CounterLocalstorage.css';
import ButtonLocalstorage from "./ButtonLocalstorage";



function CounterLocalstorage() {
    const [min, setMin] = useState<string | number>(3)
    const [value, setValue] = useState<number>(Number(min))
    const [max, setMax] = useState<string | number>(5)

    const incHandler = () => {
        if(max > value){
            setValue(value + 1)
        }else if( value> max){
            setValue(Number(max))
        }
    }
    const setToLocalstorageHandler = ()=>{
        localStorage.setItem('CounterValue', JSON.stringify(value))
        localStorage.setItem('CounterValue + 1', JSON.stringify(value + 1))
    }
    const getFromToLocalstorageHandler = ()=>{
        let valueAsString = localStorage.getItem('CounterValue')
        if(valueAsString){
        let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLocalstorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeLocalstorageHandler = () => {
        localStorage.removeItem('CounterValue')
    }


    return (
        <div className="Counter">
            <div className='CountBlock' >{value}</div>
            <div className="btnClass">
                <button onClick={incHandler}>Inc</button>
                <button onClick={setToLocalstorageHandler}>setToLocalstorage</button>
                <button onClick={getFromToLocalstorageHandler}>getFromToLocal</button>
                <button onClick={clearLocalstorageHandler}>clear</button>
                <button onClick={removeLocalstorageHandler}>remove</button>
            </div>
            <div>
                <div>
                    <span>Max</span>
                    <input type='number' value={max} onChange={(e)=>{setMax(e.currentTarget.value)}}/>
                </div>
                <div>
                    <span>Min</span>
                    <input type='number' value={min} onChange={(e)=>{setMin(e.currentTarget.value)}}/>
                </div>
            </div>
        </div>
    );
}

export default CounterLocalstorage;