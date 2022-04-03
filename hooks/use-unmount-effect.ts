import { useEffect } from 'react';

/**
 * This is a wrapper on top of useEffect to run effect only once after unmount
 * @param callback effect callback
 */
/* eslint-disable react-hooks/exhaustive-deps */
export const useUnmountEffect = (callback: Function) => useEffect(() => {
  return () => callback();
}, []);
