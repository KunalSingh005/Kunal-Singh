import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('HelloWorld Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<HelloWorld />);
        expect(getByText('Hello, World!')).toBeInTheDocument();
    });
});