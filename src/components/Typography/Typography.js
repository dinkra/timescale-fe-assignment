import styled from 'styled-components';

const H3 = styled.h3`
  margin: 0;
  font-family: inherit;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeXLarge};

  color: ${({ theme }) => theme.black};
`;

const H4 = styled.h4`
  margin: 0;
  font-family: inherit;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeLarge};

  color: ${({ theme }) => theme.black};
`;

const Body = styled.div`
  font-family: inherit;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-size: ${({ theme }) => theme.fontSizeNormal};

  color: ${({ theme }) => theme.black};
`;

// eslint-disable-next-line
export default {
  H3,
  H4,
  Body
};
