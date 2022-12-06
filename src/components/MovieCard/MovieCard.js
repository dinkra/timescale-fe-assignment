import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.navy400};
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%;
  cursor: pointer;

  @media ${({ theme }) => theme.mobile} {
    flex: 1 0 46%;
    max-width: calc(50% - 10px);
  }

  @media ${({ theme }) => theme.tablet} {
    flex: 1 0 30%;
    max-width: calc(33% - 15px);
  }

  @media ${({ theme }) => theme.laptop} {
    flex: 1 0 23%;
    max-width: calc(25% - 20px);
  }
`;

const StyledRating = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 50%;
  font-weight: 600;
  font-size: 12px;
`;

const StyledPoster = styled.div`
  width: 100%;
  height: 302px;

  background-image: url('${({ imgPath }) => imgPath}');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledTitle = styled.div`
  padding: 12px 12px;
  text-align: center;
`;

const MovieCard = ({ movie }) => {
  const imgPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No Image';
  return (
    <StyledCard>
      <StyledRating data-testid="movie-rating">{movie.vote_average}</StyledRating>
      <StyledPoster data-testid="movie-img" imgPath={imgPath} />
      <StyledTitle data-testid="movie-title">{movie.title}</StyledTitle>
    </StyledCard>
  );
};

export default MovieCard;
