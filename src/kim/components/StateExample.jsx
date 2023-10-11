import React, { useState } from 'react'

const StateExample = () => {
    
    // state가 아닌 일반값의 경우에는 어떻게 되는지 궁금하신 분들은 한번 해보시길
    let normalCount = 0;
    const decrease = () => {
        normalCount = normalCount - 1;
    }
    const increase = () => {
        normalCount = normalCount + 1;
    }
    console.log('normalCount : ', normalCount)

    /* useState를 이용한 상태값(state)이 바뀔 때에 해당 컴포넌트는 이를 
       반영하기 위해 화면을 다시 그립니다.(re-rendering)
       전체를 다시 그려주지 않고 이 컴포넌트만 다시 그려줍니다.
       */
    const [count, setCount] = useState(0); // const [getter, setter] = useState(초기값), useState import 필수
    const decreaseState = () => {
        setCount(count - 1);
    }
    const increaseState = () => {
        setCount(count + 1);
    }
    console.log('count : ', count)

    return (
        <div>
            <h2>카운터</h2>
            <div>
                <p>
                현재 숫자(state가 아닌 값): {normalCount}
                </p>
                <span>
                    <button type='button' onClick={decrease}>-</button>
                </span>
                 
                <span>
                    <button type='button' onClick={increase}>+</button>
                </span>
            </div>
            <div>
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
        </div>

    )
}

export default StateExample