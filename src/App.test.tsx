import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

describe('App shell', () => {
  it('renders without crashing', () => {
    const html = renderToString(<App />);
    expect(html).toContain('Sign in');
  });
});
