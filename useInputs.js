/**
 * ************************************************
 * 기존에 Info 컴포넌트에서 여러개의 인풋을 관리하기 위하여
 * useReducer 로 해결했던 작성했던 로직을 useInputs 라는 Hook 으로 따로 분리
 * ************************************************
 */

import React, { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}
