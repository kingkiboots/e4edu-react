import React from 'react'

// props를 이런 형식으로 쓸 수도 있습니다.
// props object의 key 중 사용할 키만 명시하는 것입니다.
// const message = props.message의 축약판입니다. (구조분해할당)
const ChildComponent2 = ({ message }) => {
  console.log('ChildComponent2 리렌더링');
  return (
    <div className='children' style={{ backgroundColor: "beige" }}>
      <p>저는 두번째 자식 컴포넌트입니다.</p>
      <p>부모로부터 받은 메세지 : {message}</p>
    </div>
  )
}

export default ChildComponent2