import { render, screen } from '../../../tools/renderWithProviders';

import MovieCard from '../MovieCard';

describe('MovieCard', () => {
  let renderResult;
  const movieMock = {
    adult: false,
    id: 246655,
    original_language: 'en',
    overview:
      "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    poster_path: '/qttNmCib9gHhR5q0QoZ3FgmGom9.jpg',
    title: 'X-Men: Apocalypse',
    vote_average: 6.5
  };

  beforeEach(async () => {
    renderResult = render(<MovieCard movie={movieMock} />);
  });

  test('should match snapshot', () => {
    expect(renderResult).toMatchSnapshot();
  });

  test('display rating, image and title', async () => {
    expect(screen.getByTestId('movie-rating')).toHaveTextContent(movieMock.vote_average);
    expect(screen.getByTestId('movie-img')).toBeVisible();
    expect(screen.getByTestId('movie-title')).toHaveTextContent(movieMock.title);
  });
});
