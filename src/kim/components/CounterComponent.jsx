import React from 'react'

const CounterComponent = ({count, setCount}) => {
    
    const decreaseState = () => {
        setCount(count - 1);
    }
    const increaseState = () => {
        setCount(count + 1);
    }   
  return (
    <div>
        <h3>Counter</h3>
        <p>
            현재 숫자(state): {count}
        </p>
        <span>
            <button type='button' onClick={decreaseState}>-</button>
        </span>
        
        <span>
            <button type='button' onClick={increaseState}>+</button>
        </span>
    </div>
  )
}

export default CounterComponent