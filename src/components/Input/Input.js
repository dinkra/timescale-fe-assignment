import styled from 'styled-components';
import search from '../../theme/svgs/search';

const Wrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.navy500};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.white};
  outline: none;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  text-overflow: ellipsis;
  cursor: text;

  ::placeholder {
    color: ${(p) => p.theme.navy600};
  }

  &:focus {
    transition: 0.2s linear;
    border-color: ${(p) => p.theme.navy600};
    box-shadow: 0 0 2px ${(p) => p.theme.navy600} inset;
  }

  ${({ hasIcon }) => hasIcon && 'padding-left: 34px;'}
`;

const Input = (props) => (
  <Wrapper>
    {props.hasIcon && <StyledIcon>{search}</StyledIcon>}
    <StyledInput {...props} />
  </Wrapper>
);

export default Input;
