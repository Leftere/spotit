import React, { useEffect, useRef } from "react";

export function useTimeout(callback, delay) {
  useTimer(setTimeout, clearTimeout, callback, delay);
}

export function useInterval(callback, delay) {
  useTimer(setInterval, clearInterval, callback, delay);
}

function useTimer(timer, clearTimer, callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = timer(tick, delay);
      return () => clearTimer(id);
    }
  }, [delay]);
}
