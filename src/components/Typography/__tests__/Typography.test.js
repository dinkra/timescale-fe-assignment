import { render } from '../../../tools/renderWithProviders';

import Typography from '../Typography';
const { H3, H4, Body } = Typography;

describe('Typography', () => {
  test('should match snapshot', () => {
    // H3
    const renderH3 = render(<H3>Header 3</H3>);
    expect(renderH3).toMatchSnapshot();

    // H4
    const renderH4 = render(<H4>Header 4</H4>);
    expect(renderH4).toMatchSnapshot();

    // Body
    const renderBody = render(<Body>Body</Body>);
    expect(renderBody).toMatchSnapshot();
  });
});
