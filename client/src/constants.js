// constants.js
export const API_URL =
  import.meta.env.MODE === 'test'
    ? 'http://mocked-api-url'
    : import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3000';
