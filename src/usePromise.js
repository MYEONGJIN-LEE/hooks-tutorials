/**
 * ************************************************
 * 함수형 컴포넌트에서 Promise 를 더 쉽게 사용 할 수 있는 Hook
 * 이 함수는 프로미스를 생성하는 promiseCreator 와,
 * 언제 프로미스를 새로 만들지에 대한 조건을 위한 deps 배열을 파라미터로 받아옵니다.
 * 이 deps 배열은 useEffect 의 두번째 파라미터로 전달되며, 기본값은 비어있는 배열
 * ************************************************
 */

import { useEffect, useState } from "react";

function usePromise(promiseCreator, deps) {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps);

  return [loading, resolved, error];
}

export default usePromise;
