import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('Renders application without errors', () => {
 render(<App />);
});
