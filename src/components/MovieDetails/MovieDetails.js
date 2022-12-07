import styled from 'styled-components';

// helpers
import formatDate from '../../helpers/formatDate';

// components
// import { Typography } from '../../components';
// const { H4, Body } = Typography;

// styles
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

const StyledHeader = styled(H4)`
  margin-bottom: 16px;
`;

const StyledWrapper = styled.div`
  display: flex;
  column-gap: 22px;
`;

const StyledImg = styled.img`
  width: 50%;
  height: fit-content;
`;

const StyledDescription = styled.div``;

const StyledBody = styled(Body)`
  margin-bottom: 16px;
`;

const MovieDetails = ({ movie, imgPath }) => {
  console.log(movie);
  return (
    <div>
      <StyledHeader>{movie.title}</StyledHeader>
      <StyledWrapper>
        <StyledImg src={imgPath} />
        <StyledDescription>
          <StyledBody>
            <strong>Release date:</strong> {formatDate(movie.release_date)}
          </StyledBody>
          <StyledBody>{movie.overview}</StyledBody>
          <Body>
            <strong>{movie.vote_average}</strong> / 10 ({movie.vote_count} total votes)
          </Body>
        </StyledDescription>
      </StyledWrapper>
    </div>
  );
};

export default MovieDetails;
