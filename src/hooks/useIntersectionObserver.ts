import { useCallback, useEffect, useRef, useState } from "react";

type IntersectionObserverType = { isIntersecting: boolean };
export const useIntersectionObserver = () => {
  const [inView, setInView] = useState(false);
  const observerElement = useRef(null);

  const option = { threshold: 0 };

  const handleObserver = useCallback(
    async (entries: IntersectionObserverType[]) => {
      const [target] = entries;

      if (target.isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    },
    []
  );

  useEffect(() => {
    const element = observerElement.current;
    if (element) {
      const observer = new IntersectionObserver(handleObserver, option);
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [handleObserver, option]);

  return {
    ref: observerElement,
    inView
  };
};
