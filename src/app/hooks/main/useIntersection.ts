import { useState } from 'react';

interface useIntersectionTypes {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: () => void;
}

const useIntersection = ({
  root,
  rootMargin = '0px',
  threshold = 0.5,
  onIntersect,
}: useIntersectionTypes) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
};

export default useIntersection;
