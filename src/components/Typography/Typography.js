import styled from 'styled-components';

export const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeXLarge};

  color: ${({ theme }) => theme.black};
`;

export const H4 = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizeLarge};

  color: ${({ theme }) => theme.black};
`;

export const Body = styled.div`
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  font-size: ${({ theme }) => theme.fontSizeNormal};

  color: ${({ theme }) => theme.black};
`;

const Typography = {
  H3,
  H4,
  Body
};

export default Typography;
