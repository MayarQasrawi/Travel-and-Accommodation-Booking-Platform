/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';
import { getters, fillLoginForm } from './utils';
import { useLoginMutation } from '../../../hooks/useLoginMutation';

jest.mock('../../../hooks/useLoginMutation');

const mockedUseLoginMutation = useLoginMutation as jest.MockedFunction<typeof useLoginMutation>;

describe('Pages/Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseLoginMutation.mockReturnValue({
      mutateAsync: jest.fn().mockResolvedValue({}),
      error: undefined,
    } as any);

    render(<LoginForm />);
  });

  // ---------------- Smoke Test ----------------
  describe('Smoke Test', () => {
    it('renders the login form elements', () => {
      expect(getters.getUserNameInput()).toBeInTheDocument();
      expect(getters.getPasswordInput()).toBeInTheDocument();
      expect(getters.getSubmitButton()).toBeInTheDocument();
    });
  });

  // ---------------- Validation Tests ----------------
  describe('Validation Tests', () => {
    it('submit button is disabled initially', () => {
      expect(getters.getSubmitButton()).toBeDisabled();
    });

    test.each([
      { getInput: getters.getUserNameInput, value: '', message: 'username is required' },
      { getInput: getters.getPasswordInput, value: '', message: 'password is required' },
      {
        getInput: getters.getUserNameInput,
        value: 'us',
        message: 'username must be at least 4 characters',
      },
      {
        getInput: getters.getPasswordInput,
        value: 'pa',
        message: 'password must be at least 4 characters',
      },
    ])('shows validation error: "$message"', async ({ getInput, value, message }) => {
      const input = getInput();
      input.focus();
      if (value) await userEvent.type(input, value);
      input.blur();

      expect(await screen.findByText(new RegExp(message, 'i'))).toBeInTheDocument();
    });
  });

  // ---------------- Submit Button ----------------
  describe('Submit Button Behavior', () => {
    test.each([
      { username: 'validUser', password: 'validPass', enabled: true },
      { username: 'us', password: 'pa', enabled: false },
    ])(
      'submit button should be $enabled when username="$username" and password="$password"',
      async ({ username, password, enabled }) => {
        const submitButton = getters.getSubmitButton();

        await fillLoginForm(username, password);

        await waitFor(() => {
          if (enabled) {
            expect(submitButton).toBeEnabled();
          } else {
            expect(submitButton).toBeDisabled();
          }
        });
      }
    );
  });
});
