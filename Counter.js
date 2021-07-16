/**
 * ************************************************
 * useState 사용
 * ************************************************
 */
// import React, { useState } from 'react'

// const Counter = () => {
//     let [value, setValue] = useState(0);

//     return (
//         <div>
//             <p>현재 카운터의 값은 <b>{value}</b>입니다.</p>
//             <button onClick={() => setValue(value + 1)}>+1</button>
//             <button onClick={() => setValue(value - 1)}>-1</button>
//         </div>
//     )
// }

// export default Counter

/**
 * ************************************************
 * useReducer로 상황에 따라 다양한 상태값 업데이트
 * ************************************************
 */
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
