import React, { useEffect, useState } from 'react'

const data = [
    {name: 'tomato', price: '$10', quantity: 3},
    {name: 'patato', price: '$15', quantity: 5},
    {name: 'banana', price: '$10', quantity: 2}
]
const MarketDataComponent = ({isFetch, setIsFetch}) => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        if(isFetch) {
            setItemList(data);
            setIsFetch(false);
        }
    }, [isFetch])

  return (
    <div>
        {itemList.map((e, idx) => {
            return (
                <div key={idx} className='item'>
                    <p>이름: {e.name}</p>
                    <p>가격: {e.price}</p>
                    <p>수량: {e.quantity}</p>
                </div>
            )
        })}
    </div>
  )
}

export default MarketDataComponent