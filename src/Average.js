/**
 * ************************************************
 * useCallback
 * 주로 렌더링 성능 최적화해야 하는 상황에서 사용
 * 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.
 * useRef
 * 함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해줍니다.
 * ************************************************
 */
import React, { useState, useCallback, useMemo, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");

  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  //   const onChange = (e) => {
  //     setNumber(e.target.value);
  //   };
  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };

  // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onChange = useCallback((e) => {
    console.log("onChange");
    setNumber(e.target.value);
  }, []);

  // number 혹은 list 가 바뀌었을 때만 함수 생성
  const onInsert = useCallback(
    (e) => {
      console.log("onInsert");
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
