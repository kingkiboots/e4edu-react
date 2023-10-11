import React, { useState } from 'react'
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2'
import CounterComponent from '../CounterComponent';
import ChildComponent3 from './ChildComponent3';

const ParentComponent = () => {
  // 만약 부모의 state 값이 변경되어 부모컴포넌트가 리렌더링 된다면 자식 컴포넌트들도 리렌더링이 됩니다.
  // 레고에서 굴뚝이 달린 지붕을 변경하려면 당연 굴뚝도 본체와 함께 분리되는 것과 같이
  // 자식 컴포넌트에도 영향이 갑니다. 
  // 그러므로 state는 가급적이면 최대한 자식쪽으로 내림으로서 불필요한 렌더링을 줄이는 것이 좋습니다.
  const [count, setCount] = useState(0);

  const messageForChild2 = '메세지2'
  
  console.log('ParentComponent 리렌더링');
  return (
    <div className='parent'>
      <h2>저는 부모컴포넌트입니다.</h2>
      <CounterComponent count={count} setCount={setCount} />
      <ChildComponent1 message="메세지1" />
      <ChildComponent2 message={messageForChild2} />
      <ChildComponent3 parentCount={count}/>
    </div>
  )
}

export default ParentComponent