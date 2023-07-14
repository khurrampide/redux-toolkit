'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';
import { counterActions } from './store/slice/counterSlice';

const CounterView = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(
        (state:RootState)=>state.counterSlice.value
    ) 

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    const increment = () => {        
        dispatch(counterActions.increment())
    }

    return (
        <>
            <div className='py-4 flex gap-6 items-center'>
                <button className='py-4 p-3 rounded-md bg-green-500' onClick={decrement}>Decrement</button>
                <div>Counter Value: {counterValue}</div>
                <button className='py-4 p-3 rounded-md bg-green-500' onClick={increment}>Increment</button>
            </div>
        </>
    )
}

export default CounterView