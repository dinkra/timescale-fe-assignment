import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${spin} 2s linear infinite;

  border: 6px solid ${({ theme }) => theme.orange};
  border-top: 6px solid ${({ theme }) => theme.black};
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

export default Loader;
