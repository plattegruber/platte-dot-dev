import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex({ extensions: ['.md'] })],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
