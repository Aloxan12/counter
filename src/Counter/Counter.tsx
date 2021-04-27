import React, {ChangeEvent, useState} from 'react';
import './Counter.css';
import Button from "./Button";


function Counter() {
    const [min, setMin] = useState<number>(3)
    const [count, setCount] = useState<number | string>(min)
    const [max, setMax] = useState<number>(5)
    const [error, setError] = useState<string | null>(null)

    function addCount(count: number) {
        if (count < max) {
            let newCount = count + 1
            setCount(newCount)
        }else {
            setError('Count is max')
        }
    }

    const addCountHandler = () => addCount(+count)
    const resetHandler = () => {
        setCount(min)
    }

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        if( max > min){
        return setMax(+e.currentTarget.value)
        }else {
            setError('maximum value is equal to minimum')
        }
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        if (min < max) {
            return setMin(+e.currentTarget.value)
        }else {
            setError('minimum value is equal to maximum')
        }
    }
    return (
        <div className="main">
            <div>
                <ChangeValue error={error} max={max} min={min} onChangeMax={onChangeMax} onChangeMin={onChangeMin}/>
            </div>
            <div className="Counter">
                <div className={count === max ? 'Error CountBlock':'CountBlock'}>{error || count}</div>
                <div className="btnClass">
                    <Button onClick={addCountHandler} disabled={true ? min > max : true} title='Inc'/>
                    <Button onClick={resetHandler} disabled={false} title='Reset'/>
                </div>
            </div>
        </div>

    );
}

type ChangeValueType = {
    min: number
    max: number
    error: string | null
    onChangeMax: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMin: (e: ChangeEvent<HTMLInputElement>) => void
}
export const ChangeValue = (props: ChangeValueType) => {
    return (
        <div className="Counter">
            <div className="ChangeValue">
                <span>Max:</span>
                <input type='number' value={props.max} onChange={props.onChangeMax}/>
            </div>
            <div className="ChangeValue">
                <span>Min:</span>
                <input type='number' value={props.min >=0 ? props.min : -1} onChange={props.onChangeMin}/>
            </div>
            <div className="setClass">
                <button>Set</button>
            </div>
        </div>
    )
}

export default Counter;