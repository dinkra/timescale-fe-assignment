import { useEffect, useCallback, useRef } from 'react';

const useInfiniteLoading = (ref, callback) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback; // Update ref to the latest callback.
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
      rootMargin: '20px',
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (ref.current) observer.observe(ref.current);
  }, [handleObserver, ref]);
};

export default useInfiniteLoading;
