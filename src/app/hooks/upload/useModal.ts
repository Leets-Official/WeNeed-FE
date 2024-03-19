import { useState } from 'react';

export const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleModalClick,
  };
};
