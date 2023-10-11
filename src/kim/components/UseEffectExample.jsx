import React, { useEffect, useState } from 'react'
import CounterComponent from './CounterComponent';

// 버튼 부분과 데이터부분을 다른 컴포넌트로 나누어보기도 해보면 좋습니다. 완성된 코드는 kim/components/markt/에
const UseEffectExample = () => {
    const [isFetch, setIsFetch] = useState(false);
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    useEffect(() => {
        console.log('아무때나 실행되는 함수')
    })

    useEffect(() => {
        console.log('특정한 상황에만 실행되는 함수')   
        if(isFetch) {
            alert('데이터를 불러왔습니다!')
            setData('불러온 데이터')
            setIsFetch(false);
        }
    }, [isFetch])

  return (
    <div className='parent'>
        <h2>야채장터</h2>
        <div>
            <button type='button' onClick={() => { setIsFetch(true) }}>데이터 불러오기</button>
        </div>
        <p>{data}</p>
        <CounterComponent count={count} setCount={setCount} />
    </div>
  )
}

export default UseEffectExample