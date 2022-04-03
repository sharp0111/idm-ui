import { useEffect } from 'react';

type EffectCallback = () => (void | (() => void | undefined));

/**
 * This is a wrapper on top of useEffect to run effect only once per render
 * @param callback effect callback
 */
export function useMountEffect(callback: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, []);
}
