import React from 'react';
import { render, fireEvent, screen } from '../../../tools/renderWithProviders';

import Modal from '../';

describe('Modal', () => {
  const toggleVisibility = jest.fn();
  const onClose = jest.fn();

  test('should match snapshot', () => {
    const result = render(
      <Modal isVisible={true} toggleVisibility={toggleVisibility}>
        <div>Content</div>
      </Modal>
    );

    expect(result).toMatchSnapshot();
  });

  test('should fire close event', () => {
    const { getByText } = render(
      <Modal isVisible={true} toggleVisibility={toggleVisibility}>
        <div>Content</div>
      </Modal>
    );

    const closeBtn = screen.getByTestId('modal-close-btn');
    fireEvent.click(closeBtn);
    expect(toggleVisibility).toHaveBeenCalledTimes(1);
  });
});
