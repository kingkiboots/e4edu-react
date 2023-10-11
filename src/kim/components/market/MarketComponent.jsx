import React, { useState } from 'react'
import MarketSearchComponent from './MarketSearchComponent';
import MarketDataComponent from './MarketDataComponent';

const MarketComponent = () => {
    
    const [isFetch, setIsFetch] = useState(false);

  return (
    <div className='parent'>
        <h2>야채장터</h2>
        <MarketSearchComponent setIsFetch={setIsFetch} />
        <MarketDataComponent isFetch={isFetch} setIsFetch={setIsFetch} />
    </div>
  )
}

export default MarketComponent