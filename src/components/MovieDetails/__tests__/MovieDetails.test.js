import { render } from '../../../tools/renderWithProviders';

import MovieDetails from '../MovieDetails';

describe('MovieDetails', () => {
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

  test('should match snapshot', () => {
    const result = render(<MovieDetails movie={movieMock} />);
    expect(result).toMatchSnapshot();
  });
});
