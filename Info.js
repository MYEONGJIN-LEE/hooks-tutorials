/**
 * ************************************************
 * useEffect
 * ************************************************
 */
// import React, { createContext, useEffect, useState } from "react";

// const Info = () => {
//   let [name, setName] = useState("");
//   let [nickname, setNickname] = useState("");

//   useEffect(() => {
//     console.log("effect : " + name);
//     return () => {
//       console.log("cleanup : " + name);
//     };
//   });

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName}></input>
//         <input value={nickname} onChange={onChangeNickname}></input>
//       </div>
//       <div>
//         <div>
//           <b>이름 : </b> {name}
//         </div>
//         <div>
//           <b>닉네임 : </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

//export default Info;

/**
 * ************************************************
 * useReducer 를 사용하여 Info 컴포넌트에서 인풋 상태를 관리
 * ************************************************
 */

// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     return {
//         ...state,
//         [action.name] : action.value
//     };
// }

// const Info = () => {
//     const [state, dispatch] = useReducer(reducer, {
//         name : '',
//         nickname : ''
//     });
//     const {name, nickname} = state;
//     const onChange = e => {
//         dispatch(e.target);
//     }


//     return (
//         <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//     )
// }

// export default Info

/**
 * ************************************************
 * 기존에 Info 컴포넌트에서 여러개의 인풋을 관리하기 위하여
 * useReducer 로 해결했던 작성했던 로직을 useInputs 라는 Hook 으로 따로 분리
 * ************************************************
 */

 import React from 'react'
import useInputs from './useInputs';

 const Info = () => {
     const [state, onChange] = useInputs({
         name : '',
         nickname : ''
     });
     const {name, nickname} = state;

     return (
         <div>
       <div>
         <input name="name" value={name} onChange={onChange} />
         <input name="nickname" value={nickname} onChange={onChange} />
       </div>
       <div>
         <div>
           <b>이름:</b> {name}
         </div>
         <div>
           <b>닉네임: </b>
           {nickname}
         </div>
       </div>
     </div>
     )
 }

 export default Info