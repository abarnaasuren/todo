import React from 'react'
import { useState } from 'react'
//useState na oru Hooks
//while importing hooks in react we have to import that 
//in {}bracket
//useState la State na oru particular niliya mathurathu tha 
//oru data user interaction poruthu nilaya mathurathu



// namba ethana tharava venumna useState ah kupudalam 
//but conditional ah kupuda kudathu
//1.useState(){hooks}
//2.useState()
//ipdy kupudalam 
//if (true) {
    //useState()
//}
// if kura conditional la kupuda kudathu
//..................

//useState na oru function
//useState return two array of value 
const Content = () => {
    function handleNameChange() {
        const names =["Suren" , "Abarnaa", "Thoshith"];
        const int=Math.floor(Math.random()*3);
        return names [int];  
    }
function counter () {
    const [Count , setCount] = useState(0);
    const Increment = () => {
        setCount(Count + 1);
    }
    const Decrement = () => {
        let value = 0
        if (Count <= value)
        {
            value = 1
        }
        else 
        {
            value = Count
        }
        setCount(Count - 1);
    }
    const Reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h2>Count {Count} </h2>
          <button onClick={ ()=> Increment()}>Increment</button>
          <button onClick={ ()=> Decrement()}>Decrement</button>
          <button onClick={ ()=> Reset()}>Reset</button>
            </div>
    )}

 
    


   
  return (
   <main>
    <p onDoubleClick={() => handleClick2 ('yes')}>
"I am Abranaa"
    </p>
    <button onClick={(event) => handleClick (event)}> 'Button'</button>
    </main>
  )
}

export default Content