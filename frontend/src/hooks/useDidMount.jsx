import { useRef, useEffect } from 'react';

export default function useDidMount(callback) {
  const mount = useRef(false);
  useEffect(() => {
    if (!mount.current) {
      callback();
      mount.current = true;
    }
  }, []);
}
