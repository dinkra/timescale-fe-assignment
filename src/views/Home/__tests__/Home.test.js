import { render } from '../../../tools/renderWithProviders';

import Home from '../Home';

describe('Home', () => {
  test('should match snapshot', () => {
    const result = render(<Home />);
    expect(result).toMatchSnapshot();
  });
});

// If I could add packages I would add msw - Mock Service Worker, it's very useful for mocking and testing api calls
