import React from 'react'

// 리액트 컴포넌트의 props는 키와 값이 있는 object형식으로 되어있습니다.
// 그러므로 props로 받은 값을 사용하려면 props.키이름 이렇게 해야합니다.
const ChildComponent1 = (props) => {
console.log('ChildComponent1 리렌더링');
  return (
    <div className='children' style={{backgroundColor:"green"}}>
      <p>저는 첫번째 자식 컴포넌트입니다.</p>
      <p>부모로부터 받은 메세지 : {props.message}</p>
    </div>
  )
}

export default ChildComponent1