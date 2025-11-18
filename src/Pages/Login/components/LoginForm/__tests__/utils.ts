import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const getters = {
  getUserNameInput: () => screen.getByPlaceholderText(/enter your name/i),
  getPasswordInput: () => screen.getByPlaceholderText(/enter your password/i),
  getSubmitButton: () => screen.getByRole('button', { name: /sign in/i }),
  getByText: (text: RegExp) => screen.findByText(text),
};

export const fillLoginForm = async (userName: string, password: string) => {
  const userNameInput = getters.getUserNameInput();
  const passwordInput = getters.getPasswordInput();

  await userEvent.type(userNameInput, userName);
  await userEvent.type(passwordInput, password);
};
