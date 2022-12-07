import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Backdrop = ({ toggleVisibility }) => {
  const handleClick = () => {
    if (typeof toggleVisibility !== 'undefined' && toggleVisibility) {
      toggleVisibility();
    }
  };

  return <StyledBackdrop onClick={handleClick} />;
};

export default Backdrop;
