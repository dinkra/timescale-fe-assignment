import { render, fireEvent } from '../../../tools/renderWithProviders';
import Input from '../Input';

describe('Input', () => {
  it('should match snapshot', () => {
    const wrapper = render(<Input placeholder="Type something here" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with icon', () => {
    const wrapper = render(<Input placeholder="Type something here" hasIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should listen change events', () => {
    const onChangeMock = jest.fn();

    const { getByDisplayValue } = render(
      <Input
        id="name"
        placeholder="Type something here"
        onChange={onChangeMock}
        value="value"
      />
    );
    const input = getByDisplayValue(/value/i);
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(onChangeMock).toBeCalled();
  });
});
