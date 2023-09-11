import React, {useState} from 'react'

function Button() {
    const [count, useCounter] = useState(0)
    const Increment = () => {
        useCounter(count + 1)
    }
    const Decrement = () => {
        useCounter(count - 1)
    }
        let Value = 0
        if (count <= Value)
        {
            Value=1
        }
        else 
        {
            Value = 0
        }
    }
    const Reset = () => {
        {
        useCounter(0)
        }
  return (
    <div>
        <h2>Counter{count}</h2>
        <button onClick={()=>Increment()}>+</button>
        <button onClick={()=>Decrement()}>-</button>
        <button onClick={()=>Reset()}></button>
        </div>
        )
  }



export default Button