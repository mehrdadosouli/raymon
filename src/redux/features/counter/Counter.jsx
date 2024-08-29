import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { useQuery } from '@tanstack/react-query'

export function Counter({idProduct}) {
  const { data: allProducts } = useQuery({ queryKey: ['GETPRODUCTS'], queryFn: () => getAllProducts() })
  const productBasket = useSelector((state) => state.products.basket?.find(item=>item.id == idProduct))
  const dispatch = useDispatch()
  const productSelect=allProducts.find(item=>item.id == idProduct)
  console.log(productBasket);
  
  return (
    <div>
      <div>
        <button
          style={{ padding: '5px', cursor: 'pointer' }}
          aria-label="Increment value"
          onClick={() => dispatch(increment(productSelect))}
        >
          +
        </button>
        <span style={{ padding: '5px' }}>{ !productBasket ? '0' : productBasket.count}</span>
        <button
          style={{ padding: '5px', cursor: 'pointer' }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(productSelect))}
        >
          -
        </button>
      </div>
    </div>
  )
}