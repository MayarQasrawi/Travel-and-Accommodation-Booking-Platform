import '@testing-library/jest-dom';

jest.mock('@/services/axios', () => ({
  default: {
    create: jest.fn(() => ({})),
    defaults: {
      headers: {
        common: {},
      },
    },
  },
  setAuthHeader: jest.fn(),
}));
