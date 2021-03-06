import { useEffect, useRef } from 'react';

/**
 * Custom hook to call a callback at regular intervals.
 * 
 * @param {function} callback The callback
 * @param {int} delay The interval length
 * 
 * @returns void
 * 
 * @url https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
function useInterval (callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;