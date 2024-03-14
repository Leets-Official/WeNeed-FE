import { useEffect } from 'react';

const useLoginModal = (loginModal: boolean) => {
  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [loginModal]);
  return loginModal;
};

export default useLoginModal;
