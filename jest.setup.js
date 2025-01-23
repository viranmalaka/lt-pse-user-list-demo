// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('./src/hooks/use-mobile', () => ({
  useIsMobile: jest.fn(() => ({
    isMobile: false,
  })),
}));

ResizeObserver = class ResizeObserver {
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
};
