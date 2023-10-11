import React, { useState } from 'react'
import CounterComponent from '../CounterComponent';

// 부모의 렌더링은 자식에게 영향을 주지만 자식은 부모의 렌더링에 영향을 주지 않습니다.
const ChildComponent3 = ({parentCount}) => {
  const [count, setCount] = useState(0);

  console.log('ChildComponent3 리렌더링');
  return (
    <div className='children' style={{ backgroundColor: "lightblue" }}>
      <p>저는 세번째 자식 컴포넌트입니다.</p>
      <p>부모의 카운팅 번호 : {parentCount}</p>
      <CounterComponent count={count} setCount={setCount} />
    </div>
  )
}

export default ChildComponent3