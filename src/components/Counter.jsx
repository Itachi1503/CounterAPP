import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

function Counter() {

    const dispatch = useDispatch();
    const count = useSelector((state)=> state.counter.value);
    

  return (
    <div>
      <div>
        <button onClick={()=> dispatch(decrement())}>
            Decrement
        </button>
      </div>
      <div>
        <p>{count}</p>
      </div>
      <button onClick={()=> dispatch(increment())}>
          Increment
      </button>
    </div>
  )
}

export default Counter
