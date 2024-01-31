import React, { useEffect } from 'react';
import { CloseBtn, ModalContent, ModalOverlay } from './CarModal.styled';

const CarModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = event => {
    event.stopPropagation();
  };

  return (
    isOpen && (
      <ModalOverlay onClick={handleBackdropClick}>
        <ModalContent onClick={handleModalClick}>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
          {children}
        </ModalContent>
      </ModalOverlay>
    )
  );
};

export default CarModal;
