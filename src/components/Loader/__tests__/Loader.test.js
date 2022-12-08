import { render } from '../../../tools/renderWithProviders';

import Loader from '../Loader';

describe('Loader', () => {
  test('should match snapshot', () => {
    const result = render(<Loader />);
    expect(result).toMatchSnapshot();
  });
});
