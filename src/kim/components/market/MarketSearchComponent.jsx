import React from 'react'

const MarketSearchComponent = ({setIsFetch}) => {
  return (
    <div>
        <button type='button' onClick={() => { setIsFetch(true) }}>데이터 불러오기</button>
    </div>
  )
}

export default MarketSearchComponent