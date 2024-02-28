import { useEffect, useState } from 'react';

interface useIntersectionProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersection = ({
  root,
  rootMargin = '100px',
  threshold = 0.5,
  onIntersect,
}: useIntersectionProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold },
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);
  return { setTarget };
};

export default useIntersection;
