import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import close from '../../theme/svgs/close';

// components
import Backdrop from './Backdrop';

// styles
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 250;
  background-color: ${({ theme }) => theme.white};
  padding: 20px 28px 28px;
  min-width: 360px;
`;

const StyledClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Modal = ({ isVisible, toggleVisibility, children }) => {
  const onKeyDown = (event) => {
    if (event.key === 'Escape' && isVisible && toggleVisibility) {
      toggleVisibility();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    if (isVisible) {
      document.body.style.setProperty('overflow', 'hidden');
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
      document.body.style.removeProperty('overflow');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const modalElement = (
    <>
      <Backdrop toggleVisibility={toggleVisibility} />
      <StyledModal tabIndex={-1} role="dialog">
        <StyledClose data-testid="modal-close-btn" onClick={toggleVisibility}>
          {close}
        </StyledClose>
        {children}
      </StyledModal>
    </>
  );

  return isVisible ? ReactDOM.createPortal(modalElement, document.body) : null;
};

export default Modal;
