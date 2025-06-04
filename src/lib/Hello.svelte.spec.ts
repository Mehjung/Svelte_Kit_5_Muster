import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Hello from './Hello.svelte';

describe('Hello component', () => {
	test('renders greeting', () => {
		render(Hello, { props: { name: 'Codex' } });
		expect(screen.getByText('Hello Codex')).toBeInTheDocument();
	});
});
