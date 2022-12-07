import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// api
import api from '../../api';

// hooks
import useInfiniteLoading from '../../hooks/useInfiniteLoading';

// components
import { Input, Loader, MovieCard, Typography } from '../../components';

// static
import logo from '../../static/images/logo.svg';

// styles
const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;

  @media ${({ theme }) => theme.mobile} {
    width: 90%;
  }

  @media ${({ theme }) => theme.tablet} {
    width: 90%;
  }

  @media ${({ theme }) => theme.laptop} {
    width: 1200px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.navy500};
`;

const StyledTitle = styled(Typography.H3)`
  margin-top: 37px;
  margin-bottom: 23px;
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 25px;
  row-gap: 27px;
  margin-bottom: 37px;
`;

const StyledLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 12px 0;
`;

const StyledError = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;

  color: ${({ theme }) => theme.orange};
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('');
  const loader = useRef(null);

  const getMovies = async (apiCall, page, query, currentMovies) => {
    setLoading(true);
    setError(false);
    try {
      const res = await apiCall({ page, query });
      setMovies([...currentMovies, ...res?.results]);
      setTotalPages(res?.total_pages);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(api.getMovies, 1, '', []);
  }, []);

  const infiniteLoadingCallback = async () => {
    console.log(loading, page, totalPages);
    if (loading || page > totalPages) return;
    const nextPage = page + 1;
    setPage(nextPage);
    const apiCall = query ? api.searchMovie : api.getMovies;
    getMovies(apiCall, nextPage, query, movies);
  };

  useInfiniteLoading(loader, infiniteLoadingCallback);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value;
      setMovies([]);
      setQuery(value);
      setPage(1);
      // if value is empty reset movies list to most popular
      const apiCall = value ? api.searchMovie : api.getMovies;
      getMovies(apiCall, 1, value, []);
    }
  };

  return (
    <>
      <StyledContainer>
        <StyledHeader>
          <img src={logo} alt="Timescale" width={136} height={36} />
          <Input hasIcon placeholder="Search for a movie" onKeyPress={handleSearch} />
        </StyledHeader>
        <StyledTitle>Most Recent Movies</StyledTitle>
        {movies.length > 0 && (
          <StyledList>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </StyledList>
        )}
        {loading && (
          <StyledLoader>
            <Loader />
          </StyledLoader>
        )}
        {error && <StyledError>Ooops.. something went wrong. Please try later!</StyledError>}
      </StyledContainer>
      <div ref={loader} />
    </>
  );
};

export default Home;
