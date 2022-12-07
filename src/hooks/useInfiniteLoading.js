import { useEffect, useCallback, useRef } from 'react';

const useInfiniteLoading = (ref, callback) => {
  const callbackRef = useRef();

  useEffect(() => {
    // Update ref to the latest callback
    callbackRef.current = callback;
  }, [callback]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      callbackRef.current();
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (ref.current) observer.observe(ref.current);
  }, [handleObserver, ref]);
};

export default useInfiniteLoading;
