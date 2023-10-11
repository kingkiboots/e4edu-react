import React from 'react'

// 변수 및 함수 선언, 엘리먼트 반환하는 곳 크게 이 두 가지로 구성되어있습니다.
// import, export는 필수입니다.
const ComponentExample = () => {
  const message = 'Hello_World!'
  const upperCaseMsg = () => {
    return message.toUpperCase()
  }

  // 반환하는 html 요소를 element라고 합니다. 
  // 윗부분에서 선언한 변수나 함수를 엘리먼트에서 사용할 수 있습니다. (중괄호 사용)
  return (
    <div style={{backgroundColor: 'aliceblue'}}>
      <div>message</div>
      <div>{message}</div>
      <div>{upperCaseMsg()}</div>
    </div>
  )
}

export default ComponentExample