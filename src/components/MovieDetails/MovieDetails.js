import styled from 'styled-components';

// helpers
import formatDate from '../../helpers/formatDate';

// components
import { H4, Body } from '../Typography/Typography';

// styles
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
