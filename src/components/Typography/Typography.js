import styled from 'styled-components';

const H3 = styled.h3`
  margin: 0;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  line-height: ${({ theme }) => theme.lineHeightLarge};

  color: ${({ theme }) => theme.black};
`;

const H4 = styled.h4`
  margin: 0;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeightNormal};
  font-size: ${({ theme }) => theme.fontSizeSmall};
  line-height: ${({ theme }) => theme.lineHeightSmall};
  text-transform: uppercase;

  color: ${({ theme }) => theme.black};
`;

const Body = styled.div`
  font-family: inherit;
  font-weight: ${({ bold, theme }) => (bold ? theme.fontWeightBold : theme.fontWeightNormal)};
  font-size: ${({ theme }) => theme.fontSizeNormal};
  line-height: ${({ theme }) => theme.lineHeightBase};

  color: ${({ theme }) => theme.black};
`;

export default {
  H3,
  H4,
  Body
};
